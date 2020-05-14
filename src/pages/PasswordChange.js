import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Alert, Text, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'


export default function Register({ navigation }) {

    const [newPassword1, setNewPassword1] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const [oldPassword, setOldPassword] = useState("")

    async function changePassword() {

        if (!newPassword1 || !newPassword2 || !oldPassword ) {
            Alert.alert("Oops!", "Favor, preencha todos os campos para alterar sua senha.")
        }
        else if (newPassword1 != newPassword2){
            Alert.alert("Oops!", "Informa a mesma senha no Repetir Nova Senha.")
        }
        else if (newPassword1.length <= 7){
            Alert.alert("Oops!", "Informe uma senha com 8 caracteres ou mais.")
        }

        else {
            const current_password = await SecureStore.getItemAsync('password')
            if (oldPassword == current_password) {
                await SecureStore.deleteItemAsync('password')
                await SecureStore.setItemAsync('password', newPassword1)
                Alert.alert("Concluido!", `Faça login novamente com a nova senha`)
                navigation.navigate('Login')

            } else {
                Alert.alert("Oops!", "Senha incorreta, é você mesmo?")
            }
        }
    }

    function Cancel() {
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView enable={Platform.OS == "ios"} behavior="{Platform.OS=='ios'? padding: ''}" style={styles.container}>

            <View style={styles.form}>
                <View style={styles.box_title}>
                    <Text style={styles.title}>
                        <Text style={styles.title_part}>Trocar </Text>
                        Senha Atual
                    </Text>
                </View>

                <Text style={styles.label}>Nova Senha*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua nova senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={newPassword1}
                    onChangeText={setNewPassword1}
                    secureTextEntry={true}
                />

                <Text style={styles.label}>Repetir Nova Senha*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Repita a sua nova senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={newPassword2}
                    onChangeText={setNewPassword2}
                />


                <Text style={styles.label}>Senha Atual*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informa a sua senha atual"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={oldPassword}
                    onChangeText={setOldPassword}
                />

                <TouchableOpacity style={styles.button} onPress={changePassword}>
                    <Text style={styles.text_button}>Alterar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_back} onPress={Cancel}>
                    <Text style={styles.text_button}>Cancelar</Text>
                </TouchableOpacity>

            </View>



        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3CB371"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 40
    },
    title_part: {
        color: "#1cc470"
    },
    box_title: {
        alignItems: "center"
    },
    label: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
    },
    form: {
        // alignSelf: "stretch",
        paddingBottom: 20,
        paddingTop: 20,
        paddingHorizontal: 30,
        marginTop: 30,
        backgroundColor: "white",
        width: 330,
        borderRadius: 7,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        backgroundColor: "#1cc470",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        // width: 300
    },
    text_button: {
        color: "white",
        fontSize: 17
    },
    button_back: {
        backgroundColor: "#9099A2",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        // width: 300,
        marginTop: 10
    }
});

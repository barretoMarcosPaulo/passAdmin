import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Alert, Text, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'


export default function Register({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    async function handleSubmit() {

        if (password != password2) {
            Alert.alert("Opss!", "As duas senhas não conferem")
        }
        else if (password.length <= 7) {
            Alert.alert("Opss!", "Informe uma senha com mais de 8 caracteres")
        }

        else {
            Alert.alert("Showw!", "Teu cadastro foi realizado com sucesso!")
            await SecureStore.setItemAsync('user', email)
            await SecureStore.setItemAsync('password', password)
            navigation.navigate('Login')
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
                        <Text style={styles.title_part}>Pass</Text>
                        Admin
                    </Text>
                </View>

                <Text style={styles.label}>E-mail*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu novo email"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                // secureTextEntry={true}
                />

                <Text style={styles.label}>Senha*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />


                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40
    },
    title_part: {
        color: "#1cc470"
    },
    box_title : {
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

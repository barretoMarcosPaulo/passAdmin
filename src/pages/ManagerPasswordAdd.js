import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Alert, Text, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'


export default function Register({ navigation }) {

    const [service, setService] = useState("")
    const [password, setPassword] = useState("")

    async function createPasswordStorage(){
        const passwordStorage = {}
        await SecureStore.setItemAsync('passwordStorage', JSON.stringify(passwordStorage))
    }

    async function addNewPassword() {

        if (!service || !password) {
            Alert.alert("Oops!", "Preencha todos os campos")
        }
        else {
            const current_password = await SecureStore.getItemAsync('password')
            let passwordStorages = await SecureStore.getItemAsync('passwordStorage')

            // passwordStorage ? addPasswordStorage() : createPasswordStorage()
            console.log(passwordStorages)
                // await SecureStore.setItemAsync('user', email)
                // Alert.alert("Concluido!", `Faça login novamente com o email ${email}`)
                // navigation.navigate('Login')

            
        }
    }

    function Cancel() {
        navigation.navigate('Home')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.form}>
                <View style={styles.box_title}>
                    <Text style={styles.title}>
                        <Text style={styles.title_part}>Adicionar </Text>
                        Senha
                    </Text>
                <Text style={styles.small}>Aqui você pode adicionar as senhas dos seus aplicativos e ou serviços.</Text>
                </View>

                <Text style={styles.label}>Servico/App*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Instagram,Facebook,Gmail etc..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={service}
                    onChangeText={setService}
                // secureTextEntry={true}
                />

                <Text style={styles.label}>Senha*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha para este serviço"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />


                <TouchableOpacity style={styles.button} onPress={addNewPassword}>
                    <Text style={styles.text_button}>Adicionar</Text>
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
        // justifyContent: 'center',
        marginTop: 45,
        alignItems: 'center',

    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 30
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
    },
    small:{
        marginBottom:30,
        textAlign: "left",
        fontSize: 15
    }
});

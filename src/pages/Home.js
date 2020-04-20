import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'


export default function Register({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    async function handleSubmit() {

        if (password != password2) {
            alert("As duas senhas não conferem")
        }
        if (password.length <= 8) {
            alert("Informe uma senha com mais de 8 caracteres")
        }

        else {
            await SecureStore.setItemAsync('user', email)
            await SecureStore.setItemAsync('password', password)
            // navigation.navigate('Login')
        }
        navigation.navigate('Login')

    }

    function Cancel() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.login}>
            <Text style={styles.title}>
                <Text style={styles.title_part}>Pass</Text>
                Admin
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,

    },
    login: {
        flex: 1,
        margin: 90,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    title_part: {
        color: "#1cc470"
    },
    label: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
    },
    form: {
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop: 30
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
        width: 300
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
        width: 300,
        marginTop: 10
    }
});

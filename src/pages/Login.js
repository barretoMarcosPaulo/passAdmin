import React, { useState, useEffect } from 'react';
import { StyleSheet, Image,Platform, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'


export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [haveRegister, setHaveRegister] = useState(false)

    useEffect( ()=>{

        // async function userIsAuth(){
        //     await SecureStore.getItemAsync('user') ? setHaveRegister(true) : setHaveRegister(false)
        // }userIsAuth()

        async function userIsAuth() {
            await SecureStore.getItemAsync('user') ? navigation.navigate('Home') : setHaveRegister(false)
        } userIsAuth()

    },[] )

    async function Login() {

        const userStore = await SecureStore.getItemAsync('user')
        const passwordStore = await SecureStore.getItemAsync('password')
        
        if(userStore == email && passwordStore==password){
            navigation.navigate('Home')
        }else{
            alert("E-mail e/ou Senha Incorretos")
        }
    }

    function Register(){
        navigation.navigate('Register')
    }

    return (
        <KeyboardAvoidingView enable={Platform.OS == "ios"} behavior="{Platform.OS=='ios'? padding: ''}" style={styles.login}>
            {/* <Image style={styles.logo} source={logo} /> */}
            <Text style={styles.title}>
                <Text style={styles.title_part}>En</Text>
                trar
            </Text>

            <View style={styles.form}>
                <Text style={styles.label}>E-mail <Text style={styles.opacity}>*</Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu melhor e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Senha <Text style={styles.opacity}>*</Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe uma senha segura"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />


            </View>

            <TouchableOpacity style={styles.button} onPress={Login}>
                <Text style={styles.text_button}>Entrar</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={haveRegister ? styles.hidden:styles.button_back} onPress={Register}>
                <Text style={styles.text_button}>Cadastrar-se</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,

    },
    login: {
        flex: 1,
        justifyContent: 'center',
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
    button_back:{
        backgroundColor: "#9099A2",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        width: 300,
        marginTop: 10
    },
    opacity:{
        color: "gray"
    },
    hidden:{
        display: 'none'
    }
});

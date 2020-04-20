import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text,Platform,TextInput,SafeAreaView,TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'
import icon_manager from '../assets/icon-lock-2.png'
import icon_mail from '../assets/email_icon.png'

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
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
               PassAdmin
            </Text>

            <TouchableOpacity style={ [ styles.card ]}>
            
                <View style={styles.box_title_card}>
                    <Text style={styles.title_card}>Gerenciar Senhas</Text>
                </View>
            
                <Image style={styles.icon_card_manager} source={icon_manager} />
            
            </TouchableOpacity>



            <TouchableOpacity style={[styles.card]}>

                <View style={styles.box_title_card}>
                    <Text style={styles.title_card}>Meu E-mail</Text>
                </View>

                <Image style={styles.icon_card_email} source={icon_mail} />

            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,

    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1cc470"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 40,
        // display: "none"
    },
    title_part: {
        color: "#1cc470",
        
    },
    card : {
        backgroundColor: "white",
        // justifyContent: "center",
        alignItems: "center",
        height: 120,
        width: 300,
        borderRadius: 7,
        marginTop: 30
    },
    
    title_card: {
        fontSize: 18
    },

    box_title_card : {
        paddingTop: 3,
        paddingBottom: 3,
        borderBottomWidth: 0.5,
        width: 300,
        alignItems: "center",
        borderBottomColor: "gray"
    },
    icon_card_manager : {
        width:70,
        resizeMode: "contain",
        marginTop: -20
    },
    icon_card_email : {
        width:70,
        resizeMode: "contain",
        marginTop: -80
        
    }
    

});

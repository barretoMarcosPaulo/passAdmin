import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text,Platform,TextInput,SafeAreaView,TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'
import icon_manager from '../assets/icon-lock-2.png'
import icon_mail from '../assets/email_icon.png'
import icon_key from '../assets/key.png'

export default function Register({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    function email_change(){
        navigation.navigate('EmailChange')
    }

    function password_change() {
        navigation.navigate('PasswordChange')
    }

    function list_passwords(){{
        navigation.navigate('ManagerPasswordList')
    }}

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
               PassAdmin
            </Text>

            <TouchableOpacity style={[styles.card]} onPress={list_passwords}>
            
                <View style={styles.box_title_card}>
                    <Text style={styles.title_card}>Gerenciar Senhas</Text>
                </View>
            
                <Image style={styles.icon_card_manager} source={icon_manager} />
            
            </TouchableOpacity>



            <TouchableOpacity style={[styles.card]} onPress={email_change}>

                <View style={styles.box_title_card}>
                    <Text style={styles.title_card}>Meu E-mail</Text>
                </View>

                <Image style={styles.icon_card_email} source={icon_mail} />

            </TouchableOpacity>


            <TouchableOpacity style={[styles.card]} onPress={password_change}>

                <View style={styles.box_title_card}>
                    <Text style={styles.title_card}>Senha de Acesso</Text>
                </View>

                <Image style={styles.icon_card_email} source={icon_key} />

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
        backgroundColor: "#3CB371"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 40,
        color: "white"
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

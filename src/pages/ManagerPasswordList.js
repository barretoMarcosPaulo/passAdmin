import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, Platform, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'
import icon_manager from '../assets/icon-lock-2.png'
import icon_mail from '../assets/email_icon.png'
import icon_key from '../assets/key.png'

import PasswordList from '../components/PasswordsList'

export default function Register({ navigation }) {
    const pass = new Object()
    pass.service = "Instagram"
    pass.password = "11111111111"
    
    function addNewPassword(){
        navigation.navigation('ManagerPasswordAdd')
    }

    function cancel(){
        navigation.navigate('Home')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                PassAdmin
            </Text>
            
            <TouchableOpacity style={styles.newPassword}>
                <Text style={styles.textBtnNew}>+Nova</Text>
            </TouchableOpacity>
            
            <ScrollView style={styles.box_passwords_list}>
                <PasswordList password={pass}></PasswordList>
            </ScrollView>

            <TouchableOpacity style={styles.button_back} onPress={cancel}>
                <Text style={styles.text_button}>Cancelar</Text>
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
        backgroundColor: "#3CB371",
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 40,
        color: "white"
        // display: "none"
    },
    newPassword: {
        backgroundColor: 'white',
        padding: 5,
        alignSelf: 'flex-end',
        borderRadius: 7,
        marginBottom: 7
    },
    textBtnNew: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    box_passwords_list: {
        alignSelf: 'stretch',
        maxHeight: 400,
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
        borderRadius: 7,
        alignSelf: 'stretch',
        marginTop: 30,
        
    }



});

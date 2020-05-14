import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, Platform, TextInput, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

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
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                PassAdmin
            </Text>

            <PasswordList password={pass}></PasswordList>
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
    box_passwords: {
        alignSelf: 'stretch',
    },

    passwordList: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
    }


});

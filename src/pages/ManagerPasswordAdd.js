import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Alert, Text, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native'

import * as SecureStore from 'expo-secure-store';

import logo from '../assets/logo-200.png'


export default function Register({ navigation }) {

    const [service, setService] = useState("")
    const [password, setPassword] = useState("")

    async function createPasswordStorage(newPassword){
        alert("SOU NOVO")
        let StoragePasswords = {
            'storages':[]
        }
        StoragePasswords.storages.unshift(newPassword)

        await SecureStore.setItemAsync('StoragePasswords', JSON.stringify(StoragePasswords))        
    }


    async function addPasswordStorage(newPassword){
        alert("NAO SOU NOVO")
        let StoragePasswords = JSON.parse(await SecureStore.getItemAsync('StoragePasswords'))
        StoragePasswords.storages.unshift(newPassword)
        await SecureStore.setItemAsync('StoragePasswords', JSON.stringify(StoragePasswords))

        console.log(StoragePasswords.storages)
    } 


    async function handleSubmit(){
        if(!service || !password){
            Alert.alert('Oops!', 'Preencha todos os campos')
        }else{

            let passwordAdd = {
                'service':service,
                'password':password
            }

            let StoragePasswords = JSON.parse(await SecureStore.getItemAsync('StoragePasswords'))
            StoragePasswords ? addPasswordStorage(passwordAdd):createPasswordStorage(passwordAdd)
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
                        <Text style={styles.title_part}>Adicionar </Text>
                        Senha
                    </Text>
                    <Text style={styles.label_obs}>Você pode salvar a senha dos seus apps e/ou serviços aqui.</Text>
                </View>

                <Text style={styles.label}>Serviço*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email,Facebook,Instagram etc..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={service}
                    onChangeText={setService}
                />

                <Text style={styles.label}>Senha*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Qual a senha desse serviço?"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />


                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10
    },
    label_obs: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
        fontSize: 16
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

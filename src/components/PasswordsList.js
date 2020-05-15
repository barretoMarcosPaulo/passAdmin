import React, { useEffect, useState } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text,TextInput, Image, StyleSheet, TouchableOpacity, AsyncStorage, FlatList,Alert } from 'react-native'
import { Clipboard } from 'react-native'

import iconEye from '../assets/eye.svg'
import iconCopy from '../assets/copy.svg'

function PasswordList({ password, navigation }) {

    async function copyToClipBoard(){
        await Clipboard.setString(password.password)
        Alert.alert("Senha Copiada",`A senha do ${password.service} foi copiada para área de transferência!`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.service}>Instagram </Text>        
            
            
            <View style={styles.box_btns}>

                <TouchableOpacity style={styles.btnCopy} onPress={copyToClipBoard}>
                    <Text style={styles.txtBtn}>
                        Copiar
                    </Text>
                </TouchableOpacity>



                <TouchableOpacity style={styles.btnView}>
                    <Text style={styles.txtBtn}>
                        Ver
                    </Text>
                </TouchableOpacity>


            </View>


        </View>
    
    
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor:'white',
        alignSelf: 'stretch',
        display:'flex',
        flexDirection: 'column',
        padding: 18,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 7,
        alignItems: 'center'
    },
    box_btns: {
        
        display: 'flex',
        flexDirection: 'row',
    },
    service: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    btnCopy: {
        marginTop: 15,
        backgroundColor: '#f05a45',
        padding: 5,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginRight: 8,
    },
    btnView: {
        marginTop: 15,
        backgroundColor: '#1E90FF',
        padding: 5,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginRight: 8,
    },
    txtBtn: {
        fontSize: 17,
    },
    icon: {
        width: 10,
        height: 10
    }

})


export default withNavigation(PasswordList)
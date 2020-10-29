import React from 'react'
import { View, StyleSheet, StatusBar, Text } from 'react-native'

function App(){
    return(
        <>
            <StatusBar barStyle = 'light-content' backgroundColor = '#8A05BE' />
            <View style = {styles.constainer}>
                <Text style = {styles.texto}>Hello GOstack</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#8A05BE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: '#FFF',
        fontSize: 20
    }
})

export default App

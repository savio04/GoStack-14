import React, {useState, useEffect} from 'react'
import { SafeAreaView,FlatList, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native'
import api from './services/api'

function App(){

    const [projects,setProjects] = useState([])

    useEffect(() => {
        api.get('projects')
            .then(response => {setProjects(response.data)})
    }, [])

    return(
        <>
            <StatusBar barStyle = 'light-content' backgroundColor = '#8A05BE' />
            <SafeAreaView style = {styles.constainer}>
                <FlatList 
                    data = {projects}
                    keyExtractor = {project  => project.id}
                    renderItem = {({ item }) => (
                        <Text style= {styles.texto} > {item.title} </Text>
                    )}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#8A05BE',
    },
    texto: {
        color: '#FFF',
        fontSize: 20
    }
})

export default App

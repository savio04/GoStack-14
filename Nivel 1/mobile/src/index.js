import React, {useState, useEffect} from 'react'
import { SafeAreaView,FlatList, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native'
import api from './services/api'

function App(){

    const [projects,setProjects] = useState([])

    useEffect(() => {
        api.get('projects')
            .then(response => {setProjects(response.data)})
    }, [])

    async function handleAddProject(){
        const dados = await api.post('projects', {
            title: 'Projeto vindo do front-end',
            owner: 'Sávio'
        })

        const response = dados.data
        setProjects([...projects,response])
    }

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
                <TouchableOpacity onPress = { handleAddProject } style = {styles.button}>
                    <Text style = {styles.buttonText} >Adiconar projeto</Text>
                </TouchableOpacity>
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
    },
    button:{
        backgroundColor: 'green',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 20
    },
    buttonText:{
        color: '#FFF',
        fontSize: 15
    }
})

export default App

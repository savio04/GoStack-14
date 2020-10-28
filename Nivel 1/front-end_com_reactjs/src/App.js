import React,{useState, useEffect}  from 'react';
import Header from './components/Header'
import './App.css'
import api from './Api/api'

function App() {

  const [projects,setprojects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      setprojects(response.data)
    })
  }, [])

  async function addProject(){

    const dados = await api.post('projects', {
      title: 'Projeto teste',
      owner: 'Sávio'
    })

    const response = dados.data
    setprojects([...projects, response])
  }

  return (
    <div className="App">
      <Header nome = 'Desenvolvedor ReactJS'/>

      <ul>
        {projects.map(project => <li key = {project.id} >{project.title}</li>)}
      </ul>

      <button type = "button" onClick = {addProject}>Adicionar projeto</button>
    </div>
  );
}

export default App;

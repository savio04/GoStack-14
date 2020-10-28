import React, {useState, useEffect} from "react";
import api from './services/api'
import "./styles.css";

function App() {

  const [repositories, setrepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      const data = response.data
      console.log(data)
      setrepositories(data)
  })
  }, [])

  async function handleAddRepository() {
    const dados = await api.post('repositories',{
        title: "Front end Adicionando",
        url: "www.esqueci.com",
        techs: ["node", "reactJS"]
      })

      const response = dados.data

      setrepositories([...repositories,response])
      
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)

    const Filterrepositores = repositories.filter(repositore => repositore.id !== id)

    setrepositories(Filterrepositores)
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {
          repositories.map(repositore => (
            <li key = {repositore.id}>
             {repositore.title}

              <button onClick={() => handleRemoveRepository(repositore.id)}>
                Remover
              </button>
            </li>
          ))
        }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;

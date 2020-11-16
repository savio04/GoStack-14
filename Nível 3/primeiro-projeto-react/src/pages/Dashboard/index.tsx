import React, { useState, FormEvent } from 'react'
import { Title, Form, Respositories } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../service/api'
import logoImg from '../../assets/Logo.svg'

interface Repo{
  full_name:string
  description:string
  owner:{
    login:string
    avatar_url:string
  }

}

const Dashboard:React.FC = () => {

  const [repositories,setRepositories] = useState<Repo[]>([])
  const [newRepo,setNewRepo] = useState('')

  async function handleAddRepoository(event: FormEvent){
    event.preventDefault()

    const response = await api.get(`repos/${newRepo}`)

    const repository = response.data

    setRepositories([...repositories, repository])
    setNewRepo('')
  }

  return (
    <>
      <img src = {logoImg} alt = 'GitExplorer logo' />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit = {handleAddRepoository} >
        <input 
        placeholder = 'Digite o nome do repositório'
        value = {newRepo}
        onChange = {e  => setNewRepo(e.target.value)}
        />
        <button type = 'submit'>Pesquisar</button>
      </Form>

      <Respositories>
        {repositories.map(repository => (
          <a href="" key = {repository.full_name}>
            <img src= {repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong> {repository.full_name} </strong>
              <p> {repository.description} </p>
            </div>
            <FiChevronRight size = {20} />
          </a>
        ))}
      </Respositories>
    </>
  )
}

export default Dashboard
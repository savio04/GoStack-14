import React, { useState, FormEvent,useEffect } from 'react'
import { Title, Form, Respositories, Error } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
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

  const [repositories,setRepositories] = useState<Repo[]>(() => {
    const storageRepository = localStorage.getItem('@GitExplorer:repositories')
    if(storageRepository){
      return JSON.parse(storageRepository)
    }else{
      return []
    }
  })
  const [newRepo,setNewRepo] = useState('')
  const [inputError,setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem('@GitExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepoository(event: FormEvent){
    event.preventDefault()

    if(!newRepo){
      setInputError('Preencha autor/repositorio')
      return
    }

    try{
      const response = await api.get(`repos/${newRepo}`)

      const repository = response.data

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    }catch{
      setInputError('Autor/repositorio invalido')
    }
  }

  return (
    <>
      <img src = {logoImg} alt = 'GitExplorer logo' />
      <Title>Explore repositórios no Github</Title>

      <Form hasError = {Boolean(inputError)} onSubmit = {handleAddRepoository} >
        <input 
        placeholder = 'Digite o nome do repositório'
        value = {newRepo}
        onChange = {e  => setNewRepo(e.target.value)}
        />
        <button type = 'submit'>Pesquisar</button>
      </Form>

        {inputError && <Error> {inputError} </Error>}

      <Respositories>
        {repositories.map(repository => (
          <Link to={`repository/${repository.full_name}`} key = {repository.full_name}>
            <img src= {repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong> {repository.full_name} </strong>
              <p> {repository.description} </p>
            </div>
            <FiChevronRight size = {20} />
          </Link>
        ))}
      </Respositories>
    </>
  )
}

export default Dashboard
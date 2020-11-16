import React from 'react'
import { Title, Form, Respositories } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/Logo.svg'


const Dashboard:React.FC = () => {
  return (
    <>
      <img src = {logoImg} alt = 'GitExplorer logo' />
      <Title>Explore repositórios no Github</Title>
      <Form >
        <input placeholder = 'Digite o nome do repositório'/>
        <button type = 'submit'>Pesquisar</button>
      </Form>
      <Respositories>
        <a href="">
          <img src="https://avatars3.githubusercontent.com/u/57267878?v=4" alt="avatar"/>
          <div>
            <strong>Sávio/Gostack 14.0</strong>
            <p>Desenvolvedor full stack</p>
          </div>
          <FiChevronRight size = {20} />
        </a>
      </Respositories>
    </>
  )
}

export default Dashboard
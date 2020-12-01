import React from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiArrowLeft,FiMail,FiUser,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <Container>

      <Background />
  
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <form >
          <h1>Faça seu cadastro</h1>

          <Input placeholder = 'E-mail' icon = {FiMail} />
          <Input placeholder = 'Nome' icon = {FiUser} />
          <Input type = 'password' placeholder = 'Senha' icon = {FiLock} />

          <Button type = 'submit'>Enviar</Button>
        </form>

        <Link to="/">
          <FiArrowLeft size = {20} />
          Voltar para o logon
        </Link>
      </Content>
    </Container>
  )
} 

export default SignUp
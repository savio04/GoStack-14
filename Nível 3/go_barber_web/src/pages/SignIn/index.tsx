import React from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiLogIn,FiMail,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <form >
          <h1>Faça seu logon</h1>

          <Input placeholder = 'E-mail' icon = {FiMail} />
          <Input type = 'password' placeholder = 'Senha' icon = {FiLock} />

          <Button type = 'submit'>Enviar</Button>

          <a href="forgat">Esqueci minha senha</a>
        </form>

        <Link to="/signup">
          <FiLogIn size = {20} />
          Criar Conta
        </Link>
      </Content>

      <Background />
    </Container>
  )
} 

export default SignIn
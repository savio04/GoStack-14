import React from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <form >
          <h1>Faça seu logon</h1>

          <Input placeholder = 'E-mail'/>
          <Input type = 'password' placeholder = 'Senha'/>

          <Button type = 'submit' title = 'Enviar' />

          <a href="forgat">Esqueci minha senha</a>
        </form>

        <a href="#">
          <FiLogIn size = {20} />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  )
} 

export default SignIn
import React from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiLogIn,FiMail,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'

const SignIn: React.FC = () => {
  function handleSubmit(data:object){
    console.log(data)
  }
  return (
    <Container>
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <Form onSubmit = {handleSubmit} >
          <h1>Faça seu logon</h1>

          <Input placeholder = 'E-mail' name = 'email' icon = {FiMail} />
          <Input name = 'email' type = 'password' placeholder = 'Senha' icon = {FiLock} />

          <Button type = 'submit'>Enviar</Button>

          <a href="forgat">Esqueci minha senha</a>
        </Form>

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
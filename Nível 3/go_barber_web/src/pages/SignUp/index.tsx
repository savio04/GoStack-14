import React from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiArrowLeft,FiMail,FiUser,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'

const SignUp: React.FC = () => {

  function handleSubmit(data:object){
    console.log(data)
  }
  return (
    <Container>

      <Background />
  
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <Form onSubmit ={handleSubmit} >
          <h1>Faça seu cadastro</h1>

          <Input name = 'nome' placeholder = 'Nome' icon = {FiUser} />
          <Input name = 'email' placeholder = 'E-mail' icon = {FiMail} />
          <Input name = 'senha' type = 'password' placeholder = 'Senha' icon = {FiLock} />

          <Button type = 'submit'>Enviar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft size = {20} />
          Voltar para o logon
        </Link>
      </Content>
    </Container>
  )
} 

export default SignUp
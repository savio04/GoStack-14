import React, {useCallback,useRef} from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiLogIn,FiMail,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  
  const handleSubmit = useCallback(async (data:object) => {

    try{
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
        password: Yup.string().min(8, 'No minimo 8 digitos')
      })

      await schema.validate(data,{
        abortEarly: true
      })
    }catch(err){
      console.log(err)
    }
  }, [])
  return (
    <Container>
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <Form ref = {formRef} onSubmit = {handleSubmit} >
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
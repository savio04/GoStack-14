import React, {useCallback,useRef} from 'react'
import { Content, Container, Background } from './styles'
import Logo from '../../assets/logo.svg'
import { FiArrowLeft,FiMail,FiUser,FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../Utils/getValidationErros'
import * as Yup from 'yup'

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  console.log(formRef)

  const handleSubmit = useCallback(async (data:object) => {
    try{
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
        password: Yup.string().min(8, 'No minimo 8 digitos')
      })

      await schema.validate(data,{
        abortEarly: false
      })
    }catch(err){
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
    }
  }, [])
  return (
    <Container>

      <Background />
  
      <Content>
        <img src = {Logo} alt = 'GoBarber' />

        <Form ref ={formRef} onSubmit ={handleSubmit} >
          <h1>Faça seu cadastro</h1>

          <Input name = 'name' placeholder = 'Nome' icon = {FiUser} />
          <Input name = 'email' placeholder = 'E-mail' icon = {FiMail} />
          <Input name = 'password' type = 'password' placeholder = 'Senha' icon = {FiLock} />

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
import React, {InputHTMLAttributes, useEffect, useRef,useState,useCallback} from 'react'
import { IconBaseProps } from 'react-icons/lib'
import { Container } from './styles'
import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps>  = ({name,icon:Icon, ...rest}) => {
  
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName,defaultValue, error, registerField } = useField(name)
  const [isFoscus,setIsFocus] = useState(false)
  const [isFilled,setIsFilled] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName, 
      ref: inputRef.current,
      path: 'value'
    })
  },[fieldName,registerField])


  const handleInputFocus = useCallback(() => {setIsFocus(true)},[])

  const  handleInputBluer = useCallback(() => {
    setIsFocus(false)

    if(inputRef.current?.value){
      setIsFilled(true)
    }else{
      setIsFilled(false)
    }

  },[])

  return(
    <Container isFilled = {isFilled} isFocused = {isFoscus} >
      { Icon && <Icon size = {20} />}
      <input 
      onFocus = {handleInputFocus}
      onBlur ={handleInputBluer}
      ref = {inputRef} 
      {...rest} 
      defaultValue = {defaultValue} />
      {error}
    </Container>
  )
}
export default Input
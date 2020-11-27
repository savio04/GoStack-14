import React, {InputHTMLAttributes} from 'react'
import { InputStyle } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps>  = ({placeholder,type}) => {
  return <InputStyle type = {type} placeholder = {placeholder} />
}

export default Input
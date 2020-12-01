import React, {ButtonHTMLAttributes} from 'react'
import { ButtonStyle } from './styles'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<buttonProps> = (props) => {
  return <ButtonStyle {...props}></ButtonStyle>
}

export default Button
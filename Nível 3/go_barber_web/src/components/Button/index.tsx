import React, {ButtonHTMLAttributes} from 'react'
import { ButtonStyle } from './styles'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<buttonProps> = ({title, type}) => {
  return <ButtonStyle type = {type}> {title} </ButtonStyle>
}

export default Button
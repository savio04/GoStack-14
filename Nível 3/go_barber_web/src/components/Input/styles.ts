import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface InputProps{
  isFocused: boolean
  isFilled:boolean
  isErrored:boolean
}

export const Container = styled.div<InputProps>`

    background-color: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;


    display: flex;
    align-items: center;

    ${({isErrored}) => isErrored && css`
      border-color: #c53030;
    `}


    ${({isFocused}) => isFocused && css`
      border-color: #ff9000;
      color: #ff9000;
    `}


  input{
    color: #F4EDE8;
    background: transparent;
    border: 0;
    flex: 1;

    &::placeholder{
      color: #666360;
    }
  }

  svg{
    margin-right: 16px;
    ${props => props.isFilled && css`
      color: #ff9000;
    `}
  }

  & + div{
      margin-top: 8px;
    }

`;

export const Errors = styled(Tooltip)`
  margin-left: 16px;
  height: 20px;
  svg{
    margin: 0;
  }
  span{
    background: #c53030;
    color: #fff;

    &::before{
      border-color: #c53030 transparent;
    }
  }
`;

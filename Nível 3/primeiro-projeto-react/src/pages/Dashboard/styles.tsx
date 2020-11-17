import styled,{ css } from 'styled-components'
import { shade } from 'polished'

interface FormProps{
  hasError:boolean
}

export const Title = styled.h1`
  color: #3A3A3A;
  font-size: 48px;
  max-width: 480px;
  line-height: 46px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display:flex;

  input{
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #FFF;
    border-right: 0;

    ${(props) => props.hasError && css`
      border-color: #e41a1a;
    `}

    &::placeholder{
      color: #a8a8b3
    }
  }

  button{
    width: 210px;
    height: 60px;

    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#04D361')}
    }
  }

`;

export const Respositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a{
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    text-decoration: none;
    display:flex;
    align-items: center;
    transition: transform 0.2s;

    & + a{
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px)
    }

    img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div{
      margin-left: 16px;
      flex: 1;
      
      strong{
        font-size: 20px;
        color: #3d3d4d
      }

      p{
        color: #a8a8b3;
        font-size: 16px;
        margin-top: 4px;
      }
    }
      svg{
        margin-left: auto;
        color: #cbcbd6;
      }
  }
`;

export const Error = styled.span`
  color: #e41a1a;
  margin-top: 8px;
  display: block;
`;
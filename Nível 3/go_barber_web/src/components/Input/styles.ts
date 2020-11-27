import styled from 'styled-components'


export const InputStyle = styled.input`
  background-color: #232129;
  color: #F4EDE8;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  &::placeholder{
    color: #666360;
  }

  & + input{
    margin-top: 8px;
  }
`; 
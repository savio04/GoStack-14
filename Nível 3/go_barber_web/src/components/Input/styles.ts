import styled from 'styled-components'


export const Container = styled.div`

    background-color: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;


    display: flex;
    align-items: center;

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
  }

  & + div{
      margin-top: 8px;
    }
`;

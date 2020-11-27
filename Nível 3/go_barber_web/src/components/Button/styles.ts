import styled from 'styled-components'
import { shade } from 'polished'

export const ButtonStyle = styled.button`
      background-color: #ff9000;
      padding: 0 16px;
      font-weight: 500;
      width: 100%;
      border: 0;
      border-radius: 10px;
      height: 56px;
      color: #321e38;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover{
        background-color: ${shade(0.2, '#ff9000')}
      }
`;
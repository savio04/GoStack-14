import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Header,RepositoryInfo,Issues } from './styles'
import logoImg from '../../assets/Logo.svg'
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi'


interface ParamnsProps{
  full_name:string
}

const Repository:React.FC = () => {
  const { params } = useRouteMatch<ParamnsProps>()

  return (
    <>
      <Header>
        <img src={logoImg} alt="logo"/>
        <Link to = '/'>
          <FiChevronLeft size = {20} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/57267878?v=4" alt="avatar"/>
          <div>
            <strong>savio04/gostack-14</strong>
            <p>descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>teste</strong>
            <span>48</span>
          </li>
          <li>
            <strong>teste</strong>
            <span>48</span>
          </li>
          <li>
            <strong>teste</strong>
            <span>48</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`teste`}>
          <div>
            <strong> repository.full_name </strong>
            <p> repository.description </p>
          </div>
          <FiChevronRight size = {20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository
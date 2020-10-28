import React from 'react'


function Header(props){
    return(
        <header>
            <h2>{props.nome}</h2>
            {props.children}
        </header>
    )
}

export default Header
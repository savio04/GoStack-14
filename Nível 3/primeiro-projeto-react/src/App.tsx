import React from 'react';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'


function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App;

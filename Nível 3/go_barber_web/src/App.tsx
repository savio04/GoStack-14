import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      
      <GlobalStyles />
    </>
  );
}

export default App;

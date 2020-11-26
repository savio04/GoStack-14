import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import SignIn from './pages/signin'

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyles />
    </>
  );
}

export default App;

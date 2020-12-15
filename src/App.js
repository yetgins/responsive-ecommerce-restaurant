import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
     <NavBar />
    
    </Router>
    
  );
}

export default App;

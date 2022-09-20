import React from 'react';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <main className='container-fluid'>
      <Header />
      <Home />
    </main>
  );
};
export default App;

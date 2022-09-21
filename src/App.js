import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <main className='container-fluid mx-auto'>
      <Header />
      <Homepage />
      <Footer />
    </main>
  );
};
export default App;

import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ScrollTo } from 'react-scroll-to';

function App() {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('page-loaded');
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

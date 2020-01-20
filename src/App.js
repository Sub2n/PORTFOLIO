import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('page-loaded');
  }, []);

  return (
    <div className="App">
      <Header isScroll={isScroll} setIsScroll={setIsScroll} />
      <Main isScroll={isScroll} />
      <Footer />
    </div>
  );
}

export default App;

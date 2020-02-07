import React from 'react';
import Header from './components/Header/Header'
import Body from './components/Body'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <Header />
        </header>

        <div>
          <Body />
        </div>
       
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
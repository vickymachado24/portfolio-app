import React, { useRef, useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer'
import Resume from './Components/Resume'

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <About/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
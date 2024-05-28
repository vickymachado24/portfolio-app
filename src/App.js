import './App.css';
import Banner from './Components/Banner';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;

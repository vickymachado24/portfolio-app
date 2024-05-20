import './App.css';
import Banner from './Components/Banner';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Banner/>
    </div>
  );
}

export default App;

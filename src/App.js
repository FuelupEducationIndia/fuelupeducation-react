
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navber from './Components/Navber/Navber';

function App() {
  return (
    <div className="App">
      <Navber/>
      <Home/>
      {/* Eslint and Prettier is installed */}
    </div>
  );
}

export default App;

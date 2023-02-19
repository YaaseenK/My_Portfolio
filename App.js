import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Header} from "./components/Header/header"
import { NavBar } from "./components/Navigation/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      
      </header>
    </div>
  );
}

export default App;

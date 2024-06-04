import './App.css';
import CorrenteCard from "./Components/CorrenteCard";
import VelocidadeCard from "./Components/VelocidadeCard";

function App() {
  return (
    <div className="App">
        <div>
            <h2>Dashboard</h2>
            <p>Bem-vindo</p>
        </div>
        <div className='mainGrid'>
            <CorrenteCard/>
            <VelocidadeCard/>
        </div>
    </div>
  );
}

export default App;

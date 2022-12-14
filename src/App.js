import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>

        </NavBar>
      </header>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;

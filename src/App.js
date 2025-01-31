import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CharacterList from './components/CharacterList/CharacterList';

function App() {
  return (
    <div className="App">
        <Header />
        <CharacterList />
    </div>
  );
}

export default App;

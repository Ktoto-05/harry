import './App.css';
import Header from './components/Header/Header';
import CharacterList from './components/CharacterList/CharacterList';
import { useEffect, useState } from 'react';

function App() {
    const [schools, setSchools] = useState([]);
    const [characters, setCharacters] = useState([]);

    // Получаем список школ
    useEffect(() => {
        fetch('http://localhost:3000/schools')
            .then((data) => data.json())
            .then((schools) => {
                setSchools(schools);
            });
    }, []);

    // Функция для получения персонажей по фильтрам
    const fetchFilteredCharacters = (name = '', schoolId = '') => {
        let url = 'http://localhost:3000/characters?';

        if (name) {
            url += `name=${name}&`;
        }

        if (schoolId) {
            url += `schoolId=${schoolId}&`;
        }

        fetch(url)
            .then((data) => data.json())
            .then((characters) => {
                setCharacters(characters);
            });
    };

    // Обработчик фильтрации из SearchBar
    const handleFilterChange = (name, schoolId) => {
        fetchFilteredCharacters(name, schoolId);
    };

    // Загружаем всех персонажей, если фильтры не установлены
    useEffect(() => {
        fetchFilteredCharacters();  // Загружаем всех персонажей при первой загрузке страницы
    }, []);

    return (
        <div className="App">
            <Header schools={schools} onFilterChange={handleFilterChange} />
            <CharacterList characters={characters} />
        </div>
    );
}

export default App;

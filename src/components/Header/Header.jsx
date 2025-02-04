import SearchBar from '../SearchBar/SearchBar';
import '../style.css';

function Header({ schools, onFilterChange }) {
    return (
        <header>
            <div className="header-block">
                <div className="header-text">
                    <h1>Harry Potter</h1>
                    <h2>View all characters from the Harry Potter universe</h2>
                </div>

                {/* Передаем onFilterChange в компонент SearchBar */}
                <SearchBar schools={schools} onFilterChange={onFilterChange} />
            </div>
        </header>
    );
}

export default Header;

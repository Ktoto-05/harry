import SearchBar from '../SearchBar/SearchBar';
import '../style.css'
function Header() {
    return ( 
        <header>
        <div class="header-block">
            <div class="header-text">
                <h1>Harry Potter</h1>
                <h2>View all characters from the Harry Potter universe</h2>
            </div>

            <SearchBar />
        </div>
    </header>
    );
}

export default Header;
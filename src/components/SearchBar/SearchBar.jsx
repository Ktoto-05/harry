import '../style.css'
function SearchBar() {
    return ( 
        <div class="header-input">
                <label for="input-name">Name<input class="name-input" name="input-name" type="text" placeholder="Hermione" /></label>

                <label for="input-school">School
                    <select name="input-school" class="name-school" id="input-school">
                        <option value="" disabled selected>Choose one</option>
                        <option value="Гриффиндор">Гриффиндор</option>
                        <option value="Пуффендуй">Пуффендуй</option>
                        <option value="Слизерин">Слизерин</option>
                        <option value="Когтевран">Когтевран</option>
                    </select>
                </label>
                
                
            </div>
    );
}

export default SearchBar;
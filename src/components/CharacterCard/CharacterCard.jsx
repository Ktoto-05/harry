import '../style.css'
function CharacretCard() {
    return ( 
        <div class="cards">
            <div class="card-block">
                <div class="card-img">
                    <img src="/img/hermione.png" alt="гермиона" />
                </div>

                <div class="card-text">
                    <h3>Hermione Granger</h3>
                    <p>Actor: Emma Watson</p>
                    <p>Gender: female</p>
                    <p>House: Гриффиндор</p>
                    <p>Wand core: dragon heartstring</p>
                    <p>Alive: yes </p>
                </div>
            </div>
        </div>
    );
}

export default CharacretCard;
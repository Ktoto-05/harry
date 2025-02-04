import '../style.css';

function CharacterCard({ character }) {
    return (
        <div className="cards">
            <div className="card-block">
                <div className="cardImage">
                    <img src={'http://localhost:3000/static/' + character.image} alt={character.name} />
                </div>

                <div className="card-text">
                    <p>Name: {character.name}</p>
                    <p>Age: {character.age}</p>
                    <p>House: {character.school}</p>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
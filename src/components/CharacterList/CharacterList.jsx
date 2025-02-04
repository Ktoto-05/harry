import '../style.css';
import CharacterCard from '../CharacterCard/CharacterCard';

function CharacterList({ characters }) {
    return (
        <>
            {characters && characters.map((character) => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </>
    );
}

export default CharacterList;
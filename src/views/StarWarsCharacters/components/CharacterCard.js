import { Link} from 'react-router-dom';

function CharacterCard({character}){
    const id = character.url.split("/")[5]
    return(
        <Link to={`/starwars/people/${id}`}>
            <div className="characterCard">
            <h1>{character.name}</h1>
            <ul>
                <li>Birth: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Hair: {character.hair_color}</li>
                <li>Eye Color: {character.eye_color}</li>
            </ul>
            </div>
        </Link>
    )
}

export default CharacterCard;
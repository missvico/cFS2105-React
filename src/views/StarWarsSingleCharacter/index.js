import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

function StarWarsSingleCharacter (props){
    const urlParams = useParams();
    const [character, setCharacter] = useState({})

    useEffect(
        function(){
            axios(`https://swapi.dev/api/people/${urlParams.id}`)
            .then(function(response){
                setCharacter(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
        },[urlParams.id]
    )

    console.log(character)

    return(
        <div>
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
    )
}

export default StarWarsSingleCharacter;
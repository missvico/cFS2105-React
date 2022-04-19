import CharacterCard from "./CharacterCard";

function CharacterList(props){

    return(
        <div>
            <ul>
                {
                    props.characters.map(function(character, index){
                        return (
                            <li key={index}>
                                <CharacterCard character={character}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default CharacterList;
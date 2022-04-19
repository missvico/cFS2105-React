import {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';

import "./style.css"

function StarWarsCharacters (){
    const [characters, setCharacters] = useState([])
    const [pagesCount, setPagesCount] = useState(0)
    const [currPage, setCurrPage] = useState(1)

    const handleChangePage = function(page){
        setCurrPage(page)
    }

    useEffect(function(){
        axios(`https://swapi.dev/api/people/?page=${currPage}`)
        .then(function(response){
            setCharacters(response.data.results)
            setPagesCount(response.data.count/10)
        }).catch(function(error){
            console.log(error)
        })
    },[currPage])

    return (
        <section>
            <h1>Star Wars Characters</h1>
            <Pagination pagesCount={pagesCount} handleChangePage={handleChangePage} currPage={currPage}/>
            <CharacterList characters={characters}/>
        </section>
    )
}


export default StarWarsCharacters;

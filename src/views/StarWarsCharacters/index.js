import {useState, useEffect} from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import Pagination from './components/Pagination';

import "./style.css"

function StarWarsCharacters (){
    const [characters, setCharacters] = useState([])
    const [pagesCount, setPagesCount] = useState(0)
    const location = useLocation()
    const navigate = useNavigate()

    const handleChangePage = function(page){
        navigate(`?page=${page}`)
    }


    useEffect(function(){
        axios(`https://swapi.dev/api/people/${location.search}`)
        .then(function(response){
            setCharacters(response.data.results)
            setPagesCount(response.data.count/10)
        }).catch(function(error){
            console.log(error)
        })
    },[location.search])

    return (
        <section>
            <h1>Star Wars Characters</h1>
            <Pagination pagesCount={pagesCount} handleChangePage={handleChangePage} currPage={location.search.split("=")[1]}/>
            <CharacterList characters={characters}/>
        </section>
    )
}


export default StarWarsCharacters;

import {useState} from 'react'
import axios from 'axios';
import ProductCard from './components/ProductCard'
import SearchInput from './components/SearchInput';
import './style.scss'

function EjercicioIntegrador (){
    const [searchInput, setSearchInput] = useState("")
    const [productList, setProductList] = useState([])
    const [searched, setSearched] = useState(false)
    
    const handleChange = function (event){
        setSearchInput(event.target.value)
    }

    const handleClick = function (event){
        axios(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchInput}`)
        .then(
            result => {
                setProductList(result.data.slice(0,20))
                setSearched(true)
            }
        )
        .catch(
            error => console.log(error)
        )
    }
    return(
        <section>
            <SearchInput value={searchInput} handleChange={handleChange} handleClick={handleClick}/>

            {
                searched&&!productList.length? 
                <h1>No hay elementos que coincidan con tu busqueda</h1>:

                productList.map(product => <ProductCard product={product}/>)
            }
        </section>
    )
}

export default EjercicioIntegrador;
import {useState} from 'react';
import Number from './components/Number';
import Button from './components/Button';
import './style.css'

function Counter(){
    const [count, setCount] = useState(0) //destructuring
    
    function handleAdd(event){
        setCount(count+1)
    }

    function handleSubstract(event){
        setCount(count - 1)
    }

    // const state = useState(0) // devuelve un arreglo con dos elementos
    // const count = state[0] // el primero es la referencia al estado local
    // const setCount = state[1] // el segundo es la referencia a la funcion actualizadora del estado local

    return(
        <section>
            <h1>Counter</h1> 
            <Button disabled={count <= 0} handleClick={handleSubstract} symbol="-"/>
            <Number number={count} />
            <Button disabled={count >= 20} handleClick={handleAdd} symbol="+"/>
        </section>
    )
}

export default Counter;
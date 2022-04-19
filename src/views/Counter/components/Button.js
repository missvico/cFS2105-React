function Button ({disabled, symbol, handleClick}){
    //const className = props.symbol === "+"? "buttonAdd" : "buttonSubs" //OPCION 1 CON TERNARIO

    const className = setClass(symbol)
    
    function setClass(simbolo){
        if(simbolo === "+"){
            return "buttonAdd"
        }else{
            return "buttonSubs"
        }
    }

    return (
        <button disabled={disabled} className={className} onClick={handleClick}>{symbol}</button>
    )
}

export default Button;

//DESESTRUCTURAR

//En objetos:
// Estas creando una variable que tiene el mismo nombre y lleva el mismo valor que la propiedad
// const number = props.number
// const {number} = props
function Button (props){
    const className = props.symbol === "+"? "buttonAdd" : "buttonSubs"
    return (
        <button disabled={props.disabled} className={className} onClick={props.handleClick}>{props.symbol}</button>
    )
}

export default Button;
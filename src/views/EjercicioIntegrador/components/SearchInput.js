function SearchInput ({handleChange, handleClick, value}){
    return(
        <div className="d-flex">
            <input type="text" onChange={handleChange} value={value} className="form-control" id="exampleInputPassword1" placeholder="Search makeup"/><button onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchInput;
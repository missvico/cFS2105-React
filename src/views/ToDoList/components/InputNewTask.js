function InputNewTask (props){
    return(
        <div>
            <input onChange={props.handleChange} className="taskInput" value={props.value} placeholder="Write a new task..."/>
            <button onClick={props.handleClick} className="taskButton">Add</button>
        </div>
    )
}

export default InputNewTask;
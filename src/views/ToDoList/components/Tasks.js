function Tasks(props){

  
    return(
        <div>
            <ol>
                {
                    props.taskList.map(function(task,index){
                        
                        function onClickDelete(){
                            props.handleDelete(index)
                        }
                        
                        return (
                            <li key={index}>
                                {task}
                                <button onClick={onClickDelete}> Borrar </button>   
                                {/* <button onClick={()=>props.handleDelete(index)}> Borrar </button>    */}
                            </li>
                        )
                    })
                }
            </ol>
        </div>

    )
}

export default Tasks;
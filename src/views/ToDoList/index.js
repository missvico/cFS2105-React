import {useState, useEffect} from 'react';
import InputNewTask from './components/InputNewTask';
import Tasks from './components/Tasks';
import './style.css'

function ToDoList(){
    const [currTask, setCurrTask] = useState("")
    const [taskList, setTaskList] = useState([])

    useEffect(
        function(){
            console.log("Efecto")
           
    },[taskList])
    
    const handleChange = function(event){
        setCurrTask(event.target.value)
    }

    const handleClick = function (){
        
        const newTaskList = taskList.slice()
        newTaskList.push(currTask)
        setTaskList(newTaskList)
        setCurrTask("")

        //setTaskList([...taskList, currTask])
    }

    // Arreglo de 4 elementos
    //quiero eliminar la tarea en el indice 2
    const handleDelete = function(deleteIndex){
        const filteredList = taskList.filter(function(task, index){
            return deleteIndex !== index
        })
        setTaskList(filteredList)
    }



    return(
        <section id="toDoList">
            <h1>To Do List</h1>
            <InputNewTask handleChange={handleChange} handleClick={handleClick} value={currTask}/>
            <Tasks handleDelete={handleDelete} taskList={taskList}/>
        </section>
    )
}

export default ToDoList;
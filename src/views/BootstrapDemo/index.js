import {useState} from 'react';
import axios from 'axios';
import './style.css'

function BootstrapDemo() {
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
    const [showAlert, setShowAlert] = useState(false)
    const handleChange = function (event) {
        setShowAlert(false)

        const property = event.target.id
        const value =  event.target.value
        setUserInput({...userInput, [property]: value})
    }

    const handleSubmit = function (event){
        event.preventDefault()
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: userInput
        }).then( result => {
            console.log(result)
            setShowAlert(true)
            setUserInput({name: "", email: "", phone: "", message: ""})
        })
        .catch( error => console.log(error))
    }

    // const handleChangeName = function (event) {
    //     const value =  event.target.value
    //     setUserInput({...userInput, name: value})
    // }

    // const handleChangeEmail = function (event) {
    //     const value =  event.target.value
    //     setUserInput({...userInput, email: value})
    // }

    // const handleChangePhone = function (event) {
    //     const value =  event.target.value
    //     setUserInput({...userInput, phone: value})
    // }

    // DOT NOTATION Y BRACKET NOTATION
    // object.name
    // object["name"]
    // let property = "name"
    // object[property]

    return (
        <section>
        <h1>Demo Bootstrap</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
                value={userInput.name}
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={userInput.email}
            />
            </div>
            <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone"
                value={userInput.phone}

            />
            </div>
            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
                onChange={handleChange}
                className="form-control"
                id="message"
                rows="3"
                value={userInput.message}
            ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submitForm">Submit</button>
        </form>
        {showAlert && <div className="alert alert-success">Mensaje enviado correctamente</div>}

        </section>
  );
}

export default BootstrapDemo;

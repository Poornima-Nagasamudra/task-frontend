import React from 'react'
import {useState} from 'react'
import { startUserRegister } from '../actions/userAction'
import { useDispatch } from 'react-redux'

const Register = (props) => {
    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    function handleChange(e){
        if(e.target.name === 'username'){
            setUsername(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    function runValidation(){
        if(username.trim().length === 0){
            errors.username = 'username cannot be blank'
        }

        if(email.trim().length === 0){
            errors.email = 'email cannot be blank'
        }    
        
        if(password.trim().length === 0){
            errors.password = 'password has minimum 8 characters, atleast 1 uppercase, 1 symbol'
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        runValidation()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {
                username: username, 
                email: email,
                password: password
            }
            dispatch(startUserRegister(formData, props))
            setUsername('')
            setEmail('')
            setPassword('')
        } else {
            console.log('form data', errors)
            setFormErrors(errors)
        }
    }

    

    return(
        <div  className='col-md-6   d-flex p-4'>
            
            <form onSubmit={handleSubmit}  >
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" >Username</label>
                <input type="text"  className="form-control"  id="exampleFormControlInput1" name="username" value={username}  onChange={handleChange} />
                { formErrors.username && <span> {formErrors.username} </span>}
                </div>

                <div className="mb-3"> 
                <label htmlFor="exampleFormControlInput1" className="form-label" >Email</label>
                <input type="text" className="form-control"  id="exampleFormControlInput1" name="email" value={email} onChange={handleChange}  />
                { formErrors.email && <span> {formErrors.email} </span>} 
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" >Password </label>
                <input type="text"  className="form-control"  id="exampleFormControlInput1" name="password" value={password} onChange={handleChange} />
                { formErrors.password && <span> {formErrors.password} </span>} 
                </div>

                <div className="  btn btn-primary">
                <input type="submit" value="Register"  className="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
            </form>
            
           
        </div>
    )
}

export default Register
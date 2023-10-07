import React from 'react'
import {useState} from 'react'
import { startUserLogin } from '../actions/userAction'
import { useDispatch } from 'react-redux'

const Login = (props) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    function handleChange(e){
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    function runValidation(){
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
                email: email,
                password: password
            }
            dispatch(startUserLogin(formData,  props))
            setEmail('')
            setPassword('')
        } else {
            console.log('form data', errors)
            setFormErrors(errors)
        }
    }

    return(
        <div className='col-md-6   d-flex p-4'>
           
            <form onSubmit={handleSubmit}>
                <div   className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
                <input type="text"  className="form-control"  id="exampleFormControlInput1" name="email" value={email} onChange={handleChange} />
                { formErrors.email && <span> {formErrors.email} </span>} 
                </div>

                <div   className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="text"  className="form-control"  id="exampleFormControlInput1" name="password" value={password} onChange={handleChange} />
                { formErrors.password && <span> {formErrors.password} </span>} 
                </div>

                <div className=" btn btn-primary">
                <input type="submit" value="Login"   className="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                </div>
            </form>
         
        </div>
    )
}

export default Login
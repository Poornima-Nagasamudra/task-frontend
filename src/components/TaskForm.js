import React, {useState,useEffect} from 'react'
import { startCreateTask, startUpdateTask } from '../actions/taskAction'
import { useDispatch } from 'react-redux'

function TaskForm(props){
    const[title, setTitle] = useState('')
    const[descripition, setDescripition] = useState( '')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    const dispatch = useDispatch()

    useEffect(()=>{
        if(props.isEdit){
            setTitle(props.data.title)
            setDescripition(props.data.descripition)
        }
    },[props.data])

    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleDescripition(e){
        setDescripition(e.target.value)
    }

    function runValidation(){
        if(title.trim().length === 0){
            errors.title = 'title cannot be blank'
        }    
        
        if(descripition.trim().length === 0){
            errors.descripition = 'description cannot be blank'
        }
    }

    function handleSubmit(e){
       e.preventDefault()
        runValidation()

        if(Object.keys(errors).length === 0){
            setFormErrors({})
            const formData = {           
                title,
                descripition
            }
            if(props.isEdit){
                dispatch(startUpdateTask(props.data._id, formData))
            }else{
                dispatch(startCreateTask(formData, props))
            }
            setTitle('')
            setDescripition('')
        } else {
            setFormErrors(errors)
        }

    }

    return(
        <div  > <center>
            <form onSubmit={handleSubmit}>
                <div className="col-sm-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text"  className="form-control"  id="exampleFormControlInput1" value={title} onChange={handleTitle} />
                { formErrors.title && <span> {formErrors.title} </span>} 
                </div>

                <div className="col-sm-4">
                <label htmlFor="exampleFormControlInput2" className="form-label">Description</label>
                <textarea type="text"  className="form-control"  id="exampleFormControlInput2" value={descripition} onChange={handleDescripition}></textarea> 
                { formErrors.descripition && <span> {formErrors.descripition} </span>} 
                </div>

                <div>
                <input type="submit" value="save" className="btn btn-primary mb-3" />
                </div>
            </form>
         
           
            </center> </div>
    )
}

export default TaskForm
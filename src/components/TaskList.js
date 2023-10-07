import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleteTask } from '../actions/taskAction'
import TaskForm from './TaskForm'


function TaskList(props) {
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState(null)
    
    const dispatch = useDispatch()

    const task = useSelector((state) => {
        return state.task.data
    })

    function handleCheck(id){
        console.log(id)
    }

    function handleEdit(id){
        setIsEdit(true)
        const d = task.find(e => e._id === id)
        if(d){
            setData(d)
        }
    }

    function handleDelete(id){
        const confirm = window.confirm("Are you sure")
        if(confirm){
            dispatch(startDeleteTask(id))
        }
    }

    return(
        <div>

            { task.length === 0 ? 
                    (<div> <h1> No tasks found </h1> 
                         <p> Add you first task </p>
                    </div>) : 
                    (<div>            
                        <h1>My tasks - {task.length} </h1>

                        <table className='table table-striped table-hover table-bordered'>
                            <thead>
                                <tr>
                                    <th>select</th>
                                    <th>title</th>
                                    <th>descripition</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                               { task.map((t) => {
                                  return  ( <tr key={t._id}> 
                                                <td> <input type="checkbox" checked={t.select} onChange={() => {handleCheck( t._id)}} /> </td>
                                                <td> {t.title} </td>
                                                <td> {t.descripition} </td>
                                                <td> <button onClick={() => handleEdit(t._id)}> edit </button> </td>
                                                <td> <button onClick={() => {handleDelete(t._id)}}> delete </button> </td>
                                                </tr>
                                            )
                                
                               })}
                            </tbody>
                        </table>                       
                   </div>)
            } 
            {isEdit ? <TaskForm data={data} isEdit={isEdit}/>  : <TaskForm /> }            
        </div>
    )
}

export default TaskList
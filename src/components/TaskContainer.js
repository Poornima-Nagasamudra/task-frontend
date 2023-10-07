import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { startGetTasks } from '../actions/taskAction'
import TaskList from './TaskList'

function TaskContainer(props){
    const dispatch = useDispatch()

    useEffect(()=> {
       dispatch(startGetTasks())
    },[dispatch])

    return(
        <div >
            <TaskList  /> 
        </div>                            

    )
}

export default TaskContainer
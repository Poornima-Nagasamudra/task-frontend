import axios from 'axios'

export function startGetTasks(){
    return(dispatch) => {
        axios.get('http://localhost:4001/users/task', {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(getTasks(result))
        })
        .catch((err) => {
            alert(err.msg)
        })
    }
}
function getTasks(tasks){
    return {
        type: 'GET_TASKS',
        payload: tasks
    }
}

export function startCreateTask(formData) {
    return(dispatch) => {
        axios.post('http://localhost:4001/users/task', formData, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result =  response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            } else{
                dispatch(createTask(result.tasks))
            }
        })
        .catch((err) => {
            alert(err.msg)
        })
    }
    
}
function createTask(tasks){
    return{
        type: 'CREATE_TASK',
        payload: tasks
    }
}

export const startUpdateTask = (id, formData) => {
    return(dispatch) => {
        axios.put(`http://localhost:4001/users/task/${id}`, formData,  {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            dispatch(updateTask(result.tasks))
        })
        .catch((err) => {
            alert(err.msg)
        })
    }
}
function updateTask(tasks) {
    return {
        type : 'UPDATE_TASK',
        payload: tasks
    }
}

export const startDeleteTask = (id) => {
    return(dispatch) => {
        axios.delete(`http://localhost:4001/users/task/${id}`, {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data 
            dispatch(deleteTask(result.tasks._id))
        })
        .catch((err) => {
            alert(err.msg)
        })

    }
}
export function deleteTask(id) {
    return {
        type : 'DELETE_TASK',
        payload: id
    }
}

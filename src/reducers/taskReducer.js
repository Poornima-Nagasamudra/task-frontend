const taskInitialState = {
    data : []
}

const taskReducer = (state = taskInitialState, action) => {
    switch(action.type){
        case 'GET_TASKS' : {
            return {...state, data:[...action.payload]}
        }

        case 'CREATE_TASK' : {
            return {...state,  data:[...state.data, action.payload]}
        }

        case 'UPDATE_TASK' : {
            console.log("checkinnnn", action.payload)
            return {...state, data:state.data.map(function(ele){
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return ele
                }
            })}     
        }

        case 'DELETE_TASK' : {
            return {...state, data: state.data.filter(function(ele){
                return ele._id !== action.payload
           })}
        }


        default : {
            return {...state }
        }
    }
}

export default taskReducer
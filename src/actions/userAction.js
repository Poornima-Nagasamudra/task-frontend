import axios from 'axios'

 export function startUserRegister(formData, props){
    return(dispatch) => {
        axios.post('http://localhost:4001/api/register', formData)
           .then((response) => {
               const result = response.data 
               if(result.hasOwnProperty('errors')){
                   alert(result.errors)
               } else {
                  alert('succefully register')
                  props.history.push('/login')
                  dispatch(userRegister(result))
               }
           })
           .catch((err) => {
               alert(err.message)
           })
    }
}
function userRegister(user){
    return {
        type: 'REGISTER_USER',
        payload : user
    }
}

export function startUserLogin(formData, props) {
    return(dispatch) => {
        axios.post ('http://localhost:4001/api/login', formData)
           .then((response) => {
                const result = response.data 
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                } else {
                    alert('succefully login')
                    localStorage.setItem('token', result.token)
                    props.history.push('/')
                    dispatch(loginUser(result))
                }
           })
           .catch((error) => {
              alert(error.message)
           })
    }
}
function loginUser(user) {
    return{
        type : 'LOGIN_USER',
        payload : user
    }
}

export function startGetAccount(){
    return(dispatch) => {
        axios.get('http://localhost:4001/api/account', {
            headers : {
                'authorization' : localStorage.getItem('token')
            }
        })
        .then((response) => {
             const result = response.data
             dispatch(getAccount(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
function getAccount(user){
    return {
        type: 'GET_ACCOUNT',
        payload: user
    }
}
const userInitialState = {}

const userReducer = (state = userInitialState, action) => {
    switch(action.type) {
        case 'REGISTER_USER' : {
            return {...state, ...action.payload}
        }

        case 'LOGIN_USER' : {
            return {...state, ...action.payload}
        }

        case 'GET_ACCOUNT' : {
            return {...state, ...action.payload}
        }

        default : {
            return {...state}
        }
    }
}

export default userReducer
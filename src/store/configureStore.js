import {createStore, combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import taskReducer from '../reducers/taskReducer'

const configureStore = () => {
    const store = createStore(combineReducers ({
       user : userReducer,
       task : taskReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore

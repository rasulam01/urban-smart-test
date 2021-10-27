import { logged } from './reducers'
import { logIn } from './reducers'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    logged: logged,
    login: logIn
})

export default reducers

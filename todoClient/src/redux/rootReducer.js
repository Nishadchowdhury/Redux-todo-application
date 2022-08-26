// import { combineReducer } from 'redux'
import { combineReducers } from 'redux';
import filterReducer from './filters/reducer'
import TodoReducer from './Todos/reducer'

const rootReducer = combineReducers({
    todos: TodoReducer,
    filters: filterReducer,
})

export default rootReducer;
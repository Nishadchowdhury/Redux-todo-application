import { initialStateTodos } from "./initialStates";
import { ADDED, TOGGLED, COLOR_SELECTED, DELETED, ALL_COMPLETED, CLEAR_COMPLETED, } from "./actionTypes"

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const TodoReducer = (state = initialStateTodos, action) => {

    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed,

                }
            });

        case COLOR_SELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case ALL_COMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed)

        default:
            return state;
    }

}

export default TodoReducer;
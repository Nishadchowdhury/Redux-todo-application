import initialStateFilter from './initialStateFilter';
import { STATUS_CHANGED, COLOR_CHANGED } from './actionTypes'

const filterReducer = (state = initialStateFilter, action) => {

    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLOR_CHANGED:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ]
                    }
                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor =>
                            existingColor !== color
                        )
                    }
                default: return state;
            }


        default:
            return state;
    }
}

export default filterReducer;
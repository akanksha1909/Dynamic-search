import { actionTypes } from '../actions/search'
const { 
    SEARCH_SUCCESS, SEARCH_FAILURE
} = actionTypes;

const initialState = {
    data : []
}

export default function search(state = initialState, action) {
    switch(action.type) {
        case SEARCH_SUCCESS:
            return { ...state,data : action.data }
        case SEARCH_FAILURE:
            return { ...state }
        default:
            return state
    }
}
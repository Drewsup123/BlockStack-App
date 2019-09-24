import {UPDATE_DATA, UPDATE_TEXT} from './actions';

const initialState = {
    data : {},
    path : [],
    text : "",
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_DATA:
            return { ...state, data : action.payload };
        case UPDATE_TEXT:
            return { ...state, text : action.payload }
        default:
            return state;
    }
}
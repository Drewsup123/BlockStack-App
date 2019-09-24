import {UPDATE_DATA, UPDATE_TEXT, DOWN_ONE_LEVEL, UP_ONE_LEVEL} from './actions';

const initialState = {
    data : {},
    path : [],
    text : "",
    levels : [],
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_DATA:
            return { ...state, data : action.payload };
        case UPDATE_TEXT:
            return { ...state, text : action.payload }
        case DOWN_ONE_LEVEL:
            let path = [...state.path];
            path.push(action.payload);
            let levels = [...state.levels];
            levels.push(state.data[action.payload]);
            return {...state, path : path, levels : levels}
        case UP_ONE_LEVEL:
            return {...state, path : state.path.pop(), levels : state.levels.pop() }
        default:
            return state;
    }
}
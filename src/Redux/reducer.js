import {UPDATE_DATA, UPDATE_TEXT, DOWN_ONE_LEVEL, UP_ONE_LEVEL} from './actions';

const initialState = {
    data : {},
    path : [],
    breadcrumbs : [],
    text : "",
    levels : [],
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_DATA:
            return { ...state, data : action.payload, levels : [], path : [] };
        case UPDATE_TEXT:
            return { ...state, text : action.payload }
        case DOWN_ONE_LEVEL:
            let path = [...state.path];
            path.push(action.payload);
            let levels = [...state.levels];
            let folder = state.data[path[0]];
            for(let i = 1; i < path.length; i++){
                folder = folder.data[i]
            }
            console.log("folder pushed to levels", folder)
            levels.push(folder);
            return {...state, path : path, levels : levels}
        case UP_ONE_LEVEL:
            const updatedPath = [...state.path];
            const updatedLevels = [...state.levels]
            updatedPath.pop()
            updatedLevels.pop()
            return {...state, path : updatedPath, levels : updatedLevels }
        default:
            return state;
    }
}
import {UPDATE_DATA, UPDATE_TEXT, DOWN_ONE_LEVEL, UP_ONE_LEVEL, UPDATE_FILE_INDEX, UPDATE_CODE, DOWN_MULTIPLE_LEVELS} from './actions';

const initialState = {
    data : {},
    path : [],
    breadcrumbs : [],
    text : "",
    levels : [],
    fileIndex : null,
    code : ``,
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_DATA:
            return { ...state, data : action.payload, levels : [], path : [], breadcrumbs : [] };
        case UPDATE_TEXT:
            return { ...state, text : action.payload }
        case DOWN_ONE_LEVEL:
            let path = [...state.path];
            let breadcrumbs = [...state.breadcrumbs];
            breadcrumbs.push(action.payload.name);
            path.push(action.payload.index);
            let levels = [...state.levels];
            let folder = state.data[path[0]];
            for(let i = 1; i < path.length; i++){
                folder = folder.data[path[i]]
            }
            console.log("folder pushed to levels", folder)
            levels.push(folder);
            return {...state, path : path, levels : levels, breadcrumbs : breadcrumbs }
        case UP_ONE_LEVEL:
            const updatedPath = [...state.path];
            const updatedLevels = [...state.levels]
            const updatedBread = [...state.breadcrumbs];
            updatedPath.pop()
            updatedLevels.pop();
            updatedBread.pop();
            return {...state, path : updatedPath, levels : updatedLevels, breadcrumbs : updatedBread }
        case DOWN_MULTIPLE_LEVELS:
            const i = action.payload;
            const updatedPath1 = [...state.path];
            const updatedLevels1 = [...state.levels]
            const updatedBread1 = [...state.breadcrumbs];
            console.log(i);
            for(i; i > 0; i--){
                updatedPath1.pop()
                updatedLevels1.pop();
                updatedBread1.pop();
            }
            return {...state, path : updatedPath1, levels : updatedLevels1, breadcrumbs : updatedBread1 };
        case UPDATE_FILE_INDEX:
            return {...state, fileIndex : action.payload};
        case UPDATE_CODE:
            return { ...state, code : action.payload }
        default:
            return state;
    }
}
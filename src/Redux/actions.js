// /* 
//   Action Types Go Here!
//   Be sure to export each action type so you can pull it into your reducer
// */
export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATE_PATH = "UPDATE_PATH";
export const DOWN_ONE_LEVEL = "DOWN_ONE_LEVEL";
export const UP_ONE_LEVEL = "UP_ONE_LEVEL";
export const UPDATE_TEXT = "UPDATE_TEXT";
export const UPDATE_FILE_INDEX = "UPDATE_FILE_INDEX";
export const UPDATE_CODE = "UPDATE_CODE";

export const updateData = (payload) => dispatch => {
    dispatch({type: UPDATE_DATA, payload:payload})
}

export const downOneLevel = (index, name) => dispatch => {
    dispatch({ type : DOWN_ONE_LEVEL, payload : {index : index, name : name} });
}

export const upOneLevel = () => dispatch => {
    dispatch({ type : UP_ONE_LEVEL });
}

export const updatePath = payload => dispatch => {
    dispatch({type : UPDATE_PATH, payload : payload})
}

export const updateText = text => dispatch => {
    dispatch({ type : UPDATE_TEXT, payload : text });
}

export const updateCode = code => dispatch => {
    dispatch({ type : UPDATE_CODE, payload : code });
}

export const updateFileIndex = index => dispatch => {
    dispatch({ type : UPDATE_FILE_INDEX, payload : index });
}

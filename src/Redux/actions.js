// /* 
//   Action Types Go Here!
//   Be sure to export each action type so you can pull it into your reducer
// */
export const UPDATE_DATA = "UPDATE_DATA";

export const updateData = (payload) => dispatch => {
    dispatch({type: UPDATE_DATA, payload:payload})
}

const createUID = () => {
    let dateObject = new Date();
    let uniqueId =
            dateObject.getFullYear() + '' +
            dateObject.getMonth() + '' +
            dateObject.getDate() + '' +
            dateObject.getTime();
    console.log("UID", uniqueId);
    return uniqueId;
};

export default createUID;
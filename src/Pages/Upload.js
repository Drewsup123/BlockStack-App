import React from 'react';

export default class Upload extends React.Component{
    constructor(){
        super();
        this.state = {
            file : null,
            uploadProgress : 0,
        }
    }

    render(){
        return(
            <div>
                <h1>Upload</h1>
            </div>
        );
    }
}
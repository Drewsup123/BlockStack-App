import React from 'react';
import { UserSession } from 'blockstack';

export default class Upload extends React.Component{
    constructor(){
        super();
        this.state = {
            file : null,
            uploadProgress : 0,
            userSession : null,
        }
    }

    userSession = new UserSession();

    onChangeHandler = e => {
        if(e.target.files[0]){
            this.setState({file : e.target.files[0]});
        }
    }

    testFunction = e => {
        e.preventDefault();
        let options = {
            encrypt: false
        }
        this.userSession.putFile("test", JSON.stringify([{test1 : "hello world"}, {test2 : "hello world again"}]), options)
        .then(res => {
              // /hello.txt exists now, and has the contents "hello world!".
            console.log(res)
            alert("uploaded");
        })
        .catch(err => {
            console.log(err);
        })
    }

    getfile = () => {
        let options = {
            decrypt: false
        }
        
        this.userSession.getFile("test", options)
        .then((fileContents) => {
            console.log(JSON.parse(fileContents));
        });
    }

    render(){
        return(
            <div>
                <h1>Upload</h1>
                <input accept="audio/mp3" type="file" onChange={this.onChangeHandler} />
                <button onClick={this.testFunction}>Upload</button>
                <button onClick={this.getfile}>Get File</button>
            </div>
        );
    }
}
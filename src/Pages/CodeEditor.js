import React from 'react';
import brace from "brace";
import AceEditor from "react-ace";
import 'brace/ext/language_tools';
import "brace/mode/javascript";
import "brace/theme/monokai";

export default class CodeEditor extends React.Component{
    constructor(){
        super();
        this.state = {
            code : `const welcomeMessage = "Welcome to the code editor here we have have syntax highlights and code completion for javascript"`,
            language : "javascript",
            fontSize : 14,
            output:``,
            theme : "monokai"
        }
    }

    onChange = value => {
        this.setState({ code : value})
        console.log(this.state.code)
    }

    render(){
        return(
            <div style={{width : "100%", height : "100vh"}}>
                <AceEditor
                    style={{width : "100%", height : "100%", overflowY: "scroll"}}
                    placeholder="Start Coding Here (option to run code, and other languages will be implemented later)"
                    mode="javascript"
                    theme={this.state.theme}
                    onChange={this.onChange}
                    fontSize={this.state.fontSize}
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.state.code}
                    enableBasicAutocompletion={false}
                    enableLiveAutocompletion={true}
                    enableSnippets={false}
                    showLineNumbers={false}
                    tabSize={2}
                />
            </div> 
        );
    }
}
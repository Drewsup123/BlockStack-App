import React from 'react';
// import brace from "brace";
import AceEditor from "react-ace";
import 'brace/ext/language_tools';
import "brace/mode/javascript";
import "brace/theme/monokai";
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
// import { withStyles } from '@material-ui/styles';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCode, updatePath, updateData } from '../Redux/actions';
import moment from 'moment';


class CodeEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code : this.props.code || `const welcomeMessage = "Welcome to the code editor here we have have syntax highlights and code completion for javascript"`,
            language : "javascript",
            fontSize : 14,
            output:``,
            theme : "monokai",
            saving : false,
        }
    }

    componentDidMount(){
        console.log("component did mount")
        console.log(Object.keys(this.props.data))
        if(!Object.keys(this.props.data).length){
            this.props.history.push("/files")
        }
    }

    onChange = value => {
        this.setState({ code : value})
        console.log(this.state.code)
    }

    handleSaveChanges = e => {
        e.preventDefault();
        this.setState({ saving : true })
        if(this.props.path.length){
            const data = {...this.props.data};
            const path = [...this.props.path]
            let folder = data[path[0]];
            for(let i = 1; i < path.length; i++){
                folder = folder.data[path[i]]
            }
            console.log("folder it is changing!!!!", folder)
            folder.data[this.props.index].data = this.state.code;
            this.props.updateCode(data);
            this.props.userSession.putFile(`/data`, JSON.stringify(data), {encrypt : true}).then(() => {
                this.setState({ saving : false, showSaveMessage : "Saved Successfully", lastSaved : moment().format('h:mm:ss a') });
                setTimeout(() => {
                    this.setState({ showSaveMessage : "" })
                }, 2000)
            }).catch(err => {
                console.log(err);
                this.setState({ showSaveMessage : "Error Saving file"})
                setTimeout(() => {
                    this.setState({ showSaveMessage : ""})
                }, 2000)
            })
        }else{
            const path = this.props.match.params.path;
            console.log(path);
            let final = {...this.props.data};
            final[path].data = this.state.code;
            this.props.userSession.putFile(`/data`, JSON.stringify(final), {encrypt : true}).then(() => {
                this.setState({ saving : false, showSaveMessage : "Saved Successfully", lastSaved : moment().format('h:mm:ss a') })
                setTimeout(() => {
                    this.setState({ showSaveMessage : ""})
                }, 2000)
            }).catch(err => {
                console.log(err);
                this.setState({ showSaveMessage : "Error Saving file"})
                setTimeout(() => {
                    this.setState({ showSaveMessage : ""})
                }, 2000)
            })
        }
    }

    render(){
        return(
            <div style={{width : "100%", height : "100vh"}}>
                <div style={{width : "100%", height : "5%"}}>
                    <Fab color="primary" size="small" onClick={this.handleSaveChanges}>
                        {this.state.saving ? <CircularProgress color="white"/> : <SaveIcon />}
                    </Fab>
                </div>
                <AceEditor
                    style={{width : "100%", height : "95%", overflowY: "scroll"}}
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

const mapStateToProps = state => {
    return {
        data : state.data,
        path : state.path,
        code : state.code,
        index : state.fileIndex,
    }
}

export default connect(mapStateToProps, {updateCode, updatePath, updateData})(CodeEditor)
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { withStyles } from '@material-ui/styles';
// import EditorToolbar from '../components/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { updateText, updatePath, updateData } from '../Redux/actions';

const styles = {
    container : {
        width : "100%",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    },
    paper : {
        width: "96%",
        border : "1px solid black",
        height : "90vh",
        overflowY : "scroll"
    },
    toolbar: {
        width : `100%`,
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        height : "10vh"
    },
}

class FileEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            text: this.props.text,
            saving : false,
            showSaveMessage : "",
        } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(value) {
        this.setState({ text: value });
        console.log(this.state.text)
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
            folder.data[this.props.index].data = this.state.text;
            this.props.updateData(data);
            this.props.userSession.putFile(`/data`, JSON.stringify(data), {encrypt : true}).then(() => {
                this.setState({ saving : false, showSaveMessage : "Saved Successfully" });
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
        }else{
            const path = this.props.match.params.path;
            console.log(path);
            let final = {...this.props.data};
            final[path].data = this.state.text;
            this.props.userSession.putFile(`/data`, JSON.stringify(final), {encrypt : true}).then(() => {
                this.setState({ saving : false, showSaveMessage : "Saved Successfully" })
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

    componentDidMount(){
        console.log("component did mount")
        console.log(Object.keys(this.props.data))
        if(!Object.keys(this.props.data).length){
            this.props.history.push("/files")
        }
    }

    modules = {
        toolbar: [
            [{ 'font': [] }, {'color' : []}],
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, { 'align': [] }],
            ['link', 'image'],
            ['blockquote', 'code-block'],
            ['clean']
        ],
    };
    
    formats = [
        'font', 'color',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'align',
        'link', 'image',
        'blockquote', 'code-block'
    ];
    
    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                {/* <EditorToolbar /> */}
                {this.state.saving 
                    ? <CircularProgress /> 
                    : this.state.showSaveMessage 
                        ? <p>{this.state.showSaveMessage}</p>
                        :<SaveIcon color="primary" onClick={this.handleSaveChanges} />
                }
                <ReactQuill 
                    style={{height : "100%"}}
                    value={this.state.text}
                    onChange={this.handleChange}
                    modules={this.modules}
                    formats={this.formats}
                />
            </Paper>
        )
    }
}

FileEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        data : state.data,
        path : state.path,
        text : state.text,
        index : state.fileIndex,
    }
}
const ws = withStyles(styles)(FileEditor)
export default connect(mapStateToProps, { updateText, updateData, updatePath })(ws);
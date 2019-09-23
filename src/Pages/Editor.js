import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { withStyles } from '@material-ui/styles';
import EditorToolbar from '../components/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

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
        this.state = { text: this.props.text } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(value) {
        this.setState({ text: value });
        console.log(this.state.text)
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
                <SaveIcon />
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

export default withStyles(styles)(FileEditor);
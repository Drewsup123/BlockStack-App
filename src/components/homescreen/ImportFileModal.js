import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import FormHelperText from '@material-ui/core/FormHelperText';
import { CircularProgress } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class ImportFileModal extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedFile : null,
            name : "",
            type : null,
            base64 : "",
            uploading : false,
        }
    }

    handleChange = e => {
        this.setState({ name : e.target.value })
    }

    onChangeHandler = async e => {
        const file = e.target.files[0];
        const base64 = await this.toBase64(file);
        const type = file.type;
        // console.log(file);
        // console.log("type", file.type)
        this.setState({ selectedFile : file, type : type, base64 : base64 })
        // console.log("HEEYYY", base64)
    }

    onSubmit = e => {
        // e.preventDefault();
        // name, type, base64
        this.setState({ uploading : true });
        const {name, type, base64} = this.state;
        this.props.submit(name, type, base64);
        this.setState({ uploading : false });
    }

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    render(){
        const {open, handleClose, name} = this.props;
        return(
            <Dialog open={open} onClose={() => handleClose(name)} TransitionComponent={Transition}>
                <DialogTitle>Import a File</DialogTitle>
                <DialogContent>
                    <p>As of right now we support pdf's, jpg's, and png's</p>
                    <TextField 
                        autoComplete="off"
                        id="outlined-name" 
                        label="Name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText error id="component-error-text">{this.state.name.length ? "" : "Please fill out a name"}</FormHelperText>
                    <input
                        accept="image/png, image/jpg, application/pdf"
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{display : "none"}}
                        onChange={this.onChangeHandler}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span" >
                        Choose a File {this.state.selectedFile ? `(${this.state.selectedFile.name})` : null}
                        </Button>
                        <FormHelperText error id="component-error-text">{this.state.selectedFile ? "" : "Please Select a file"}</FormHelperText>
                    </label>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => handleClose(name)} color="primary">
                        Cancel
                    </Button>
                    {this.state.uploading 
                    ?<CircularProgress />
                    :<Button disabled={!this.state.selectedFile || !this.state.name} color="primary" onClick={() => {this.setState({uploading : true}); this.onSubmit()}}>
                        Upload
                    </Button>
                    }
                </DialogActions>
            </Dialog>
        );
    }
}

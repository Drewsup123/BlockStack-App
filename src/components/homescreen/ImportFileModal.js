import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ImportFileModal extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedFile : null,
        }
    }
    render(){
        const {open, handleClose, name} = this.props;
        return(
            <Dialog open={open} onClose={() => handleClose(name)}>
                <DialogTitle>Import a File</DialogTitle>
                <DialogContent>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{display : "none"}}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" component="span" >
                        Choose a File
                        </Button>
                    </label>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => handleClose(name)} color="primary">
                        Cancel
                    </Button>
                    <Button color="primary">
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default class EditTitleModal extends React.Component{

    constructor(){
        super();
        this.state = {
            title : "",
        }
    }

    submit = e => {
        this.props.submitHandler(e, this.props.titleIndex, this.state.title)
        this.setState({ title : "" });
    }

    onChange = e => {
        this.setState({ title : e.target.value})
    }

    render(){
        return(
            <Dialog open={this.props.open}>
                <DialogTitle>New Title</DialogTitle>
                <DialogContent>
                    <TextField value={this.state.title} onChange={this.onChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.handleClose("editTitleOpen")} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.submit} disabled={!this.state.title} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
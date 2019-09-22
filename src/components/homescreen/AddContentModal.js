import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddContentModal = props => {
    const [name, setName] = React.useState("");

    const handleChange = e => {
        setName(e.target.value)
    }

    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            onBackdropClick={() => props.handleClose(props.name)}
        >
            <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
            <DialogContent>
                <FormControl>
                    <TextField 
                        autoComplete="off"
                        id="outlined-name" 
                        label="Name" 
                        value={name} 
                        onChange={handleChange} 
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText error id="component-error-text">{name.length ? "" : "Please fill out a name"}</FormHelperText>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handleClose(props.name)} color="primary">
                    Cancel
                </Button>
                <Button disabled={!name} onClick={() => props.handleSubmit(name, props.type, props.name)} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddContentModal;
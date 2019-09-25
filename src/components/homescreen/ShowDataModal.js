import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function ShowDataModal(props){
    return(
        <Dialog open={props.open} fullScreen>
            <DialogTitle>{props.item ? props.item.name : ""}</DialogTitle>
            <DialogContent>
                {
                    props.item && props.item.data && (props.item.fileType === "image/png" || props.item.fileType === "image/jpg")
                    ? <img alt="Your File" style={{maxWidth : "100%"}} src={props.item ? props.item.data : ""} />
                    : <iframe title={props.item ? props.item.name : ""} style={{width : "100%", height : "95%"}} src={props.item ? props.item.data : ""} />
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handleClose(props.name)} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
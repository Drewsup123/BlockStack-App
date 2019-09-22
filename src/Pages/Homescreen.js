import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AddContentModal from '../components/homescreen/AddContentModal';

const styles = {
    toolbar: {
        width : `calc(100% - 240px)`,
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },
};

class Homescreen extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [],
            newFolderOpen : false,
            newFileOpen : false,
            uploadFileOpen : false,
        }
    }

    handleClose = name => {
        this.setState({ [name] : false })
    }

    handleOpen = name=> {
        this.setState({ [name] : true })
    }

    handleSubmit = (name, type, toClose) => {
        if(name){
            if(type === "file"){
                console.log("file");
            }else{
                console.log("Folder")
            }
            this.setState({ [toClose] : false })
        }else{
            alert("Please input name")
        }
    }

    render(){
        const {classes} = this.props;
        const { data, newFileOpen, newFolderOpen, uploadFileOpen } = this.state;
        return(
            <div>
                <Toolbar className={classes.toolbar}>
                    <List className={classes.toolbar}>
                        <ListItem button>
                            <ListItemIcon>
                                <CreateNewFolderIcon size="small" />
                            </ListItemIcon>
                            <ListItemText onClick={() => this.handleOpen("newFolderOpen")}>
                                Add Folder
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <CloudUploadIcon size="small" />
                            </ListItemIcon>
                            <ListItemText>
                                Import File
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => this.handleOpen("newFileOpen")}>
                            <ListItemIcon>
                                <NoteAddIcon size="small" />
                            </ListItemIcon>
                            <ListItemText>
                                Create File
                            </ListItemText>
                        </ListItem>
                    </List>
                </Toolbar>
                <AddContentModal 
                    name="newFolderOpen" 
                    title="Create New Folder" 
                    open={newFolderOpen} 
                    handleClose={this.handleClose} 
                    handleSubmit={this.handleSubmit}
                    type="folder"
                />
                <AddContentModal 
                    name="newFileOpen" 
                    title="Create New File" 
                    open={newFileOpen} 
                    handleClose={this.handleClose} 
                    handleSubmit={this.handleSubmit}
                    type="file"
                />
            </div>
        )
    }
}

Homescreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Homescreen)
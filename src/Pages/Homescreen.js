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
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FolderIcon from '@material-ui/icons/Folder';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AddContentModal from '../components/homescreen/AddContentModal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { UserSession } from 'blockstack';

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
            data : {},
            newFolderOpen : false,
            newFileOpen : false,
            uploadFileOpen : false,
            userSession : null
        }
    }

    userSession = new UserSession();

    componentDidMount(){
        this.userSession.getFile("/data", {decrypt : false}).then(fileContents => {
            console.log(fileContents);
            this.setState({ data : JSON.parse(fileContents)});
        })
        // this.userSession.deleteFile("/data")
        // .then(() => {
        //     console.log("removed")
        // })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    handleClose = name => {
        this.setState({ [name] : false })
    }

    handleOpen = name=> {
        this.setState({ [name] : true })
    }

    handleSubmit = async(name, type, toClose) => {
        let data = this.state.data;
        if(type === "file"){
            // console.log("file");
            console.log(data);
            const emptyFile = {
                type : "file",
                fileType : "doc",
                name : name,
                data : <p>testing</p>,
            };
            if(data === null){
                const object = {
                    0 : emptyFile
                }
                this.userSession.putFile("/data", JSON.stringify(object), {encrypt : false}).then(() => {
                    this.setState({ data : object});
                })
            }else{
                console.log("type of data", typeof data)
                const dataLength = Object.keys(data).length;
                console.log("index", dataLength);
                data[dataLength] = emptyFile;
                this.userSession.putFile("/data", JSON.stringify(data), {encrypt : false}).then(() => {
                    this.setState({ data : data });
                })
            }
        }else{
            console.log("Folder")
            const newFolder = {
                type : "folder",
                name : name,
                data : [],
            }
            if(data === null){
                const object = {
                    0 : newFolder,
                }
                this.userSession.putFile("/data", JSON.stringify(object), {encrypt : false}).then(() => {
                    this.setState({ data : object});
                })
            }else{
                console.log("type of data", typeof data)
                const dataLength = Object.keys(data).length;
                console.log("index", dataLength);
                data[dataLength] = newFolder;
                this.userSession.putFile("/data", JSON.stringify(data), {encrypt : false}).then(() => {
                    this.setState({ data : data });
                })
            }
        }
        this.setState({ [toClose] : false })
    }

    handleClick = (e, type, index, data) => {
        e.preventDefault();
        console.log(type, index);
        this.props.changeText(data);
        this.props.history.push("/editor")
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
                <Breadcrumbs aria-label="breadcrumb">

                </Breadcrumbs>
                <List>
                    {
                    this.state.data 
                    ?
                    Object.values(data).map((item, index) =>
                        <ListItem key={index} button onClick={e => this.handleClick(e, item.type, index, item.data)}>
                            <ListItemIcon>
                                {item.type === "file" ? <InsertDriveFileIcon /> : <FolderIcon />}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItem>
                    )
                    :<p>You Haven't Created any files yet</p>
                    }
                </List>

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
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import EditIcon from '@material-ui/icons/Edit';
import ListItemText from '@material-ui/core/ListItemText';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FolderIcon from '@material-ui/icons/Folder';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AddContentModal from '../components/homescreen/AddContentModal';
import ImportFileModal from '../components/homescreen/ImportFileModal';
import ShowDataModal from '../components/homescreen/ShowDataModal';
import EditTitleModal from '../components/homescreen/EditTitleModal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import { UserSession } from 'blockstack';
import { connect } from 'react-redux';
import { updateText, updatePath, updateData, downOneLevel, upOneLevel, updateFileIndex } from '../Redux/actions';

const styles = {
    root: {
        boxSizing : "border-box",
        padding : "20px",
        paddingTop : "60px"
    },
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
            loading : true,
            newFolderOpen : false,
            newFileOpen : false,
            uploadFileOpen : false,
            ShowDataOpen : false,
            editTitleOpen : false,
            userSession : null,
            history : "",
            fileHistory : [],
            dataItem : null,
            titleIndex : null,
        }
    }

    userSession = new UserSession();

    componentDidMount(){
        this.userSession.getFile("/data", {decrypt : true}).then(fileContents => {
            console.log(fileContents);
            const parsed = JSON.parse(fileContents);
            this.props.updateData(parsed);
            this.setState({ loading : false})
        })
        // this.userSession.deleteFile("/data")
        // .then(() => {
        //     console.log("removed")
        // })
    }

    // componentDidUpdate(){
    //     console.log(this.state)
    // }

    deleteAllData = e => {
        e.preventDefault();
        if(window.confirm("Are you sure you want to delete all your data?")){
            this.userSession.deleteFile("/data")
            .then(() => {
                console.log("removed")
                this.props.updateData({});
            }).catch(err => {
                alert("Error deleting data")
            })
        }
    }

    handleClose = name => {
        this.setState({ [name] : false })
    }

    handleOpen = name=> {
        this.setState({ [name] : true })
    }

    handleSubmit = async(name, type, toClose) => {
        let data = this.props.data;
        let path = this.props.path;
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
                this.userSession.putFile("/data", JSON.stringify(object), {encrypt : true}).then(() => {
                    this.props.updateData(object);
                })
            }else{
                if(path.length){
                    console.log("this should be the folder", data[path[0]])
                    let folder = data[path[0]];
                    for(let i = 1; i < path.length; i++){
                        folder = folder.data[path[i]]
                    }
                    const folderLength = Object.keys(folder.data).length;
                    folder.data[folderLength] = emptyFile;
                    this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                        this.props.updateData(data);
                    })
                }else{
                    console.log("type of data", typeof data)
                    const dataLength = Object.keys(data).length;
                    console.log("index", dataLength);
                    data[dataLength] = emptyFile;
                    this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                        this.props.updateData(data);
                    })
                }
            }
        }else{
            console.log("Folder")
            const newFolder = {
                type : "folder",
                name : name,
                data : {},
            }
            if(data === null){
                const object = {
                    0 : newFolder,
                }
                this.userSession.putFile("/data", JSON.stringify(object), {encrypt : true}).then(() => {
                    this.props.updateData(object);
                })
            }else{
                if(path.length){
                    console.log("this should be the folder", data[path[0]])
                    let folder = data[path[0]];
                    for(let i = 1; i < path.length; i++){
                        folder = folder.data[path[i]]
                    }
                    const folderLength = Object.keys(folder.data).length;
                    folder.data[folderLength] = newFolder;
                    this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                        this.props.updateData(data);
                    })
                }else{
                    console.log("type of data", typeof data)
                    const dataLength = Object.keys(data).length;
                    console.log("index", dataLength);
                    data[dataLength] = newFolder;
                    this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                        this.props.updateData(data);
                    })
                }
            }
        }
        this.setState({ [toClose] : false })
    }

    handleClick = async(e, index, item) => {
        e.preventDefault();
        const {type, name, fileType, data } = item;
        console.log(item);
        if(type === 'file'){
            if(fileType === "image/png" || fileType === "image/jpg" || fileType === "application/pdf"){
                console.log("this is an image")
                this.setState({ dataItem : item, ShowDataOpen : true})
            }else{
                await this.setState({ history : this.state.history + `${index}` })
                await this.props.updateText(data);
                this.props.updateFileIndex(index);
                this.props.history.push(`/editor/${this.state.history}`)
            }
        }else{
            this.props.downOneLevel(index, name)
        }
    }

    handleFileImportSubmit = (name, type, base64) => {
        let data = this.props.data;
        let path = this.props.path;
        const emptyFile = {
            type : "file",
            fileType : type,
            name : name,
            data : base64,
        };
        if(data === null){
            const object = {
                0 : emptyFile
            }
            this.userSession.putFile("/data", JSON.stringify(object), {encrypt : true}).then(() => {
                this.props.updateData(object);
                this.setState({ uploadFileOpen : false})
            })
        }else{
            if(path.length){
                console.log("this should be the folder", data[path[0]])
                let folder = data[path[0]];
                for(let i = 1; i < path.length; i++){
                    folder = folder.data[path[i]]
                }
                const folderLength = Object.keys(folder.data).length;
                folder.data[folderLength] = emptyFile;
                this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                    this.props.updateData(data);
                    this.setState({ uploadFileOpen : false})
                })
            }else{
                console.log("type of data", typeof data)
                const dataLength = Object.keys(data).length;
                console.log("index", dataLength);
                data[dataLength] = emptyFile;
                this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                    this.props.updateData(data);
                    this.setState({ uploadFileOpen : false})
                })
            }
        }
    }

    deleteFile = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        if(window.confirm("Are you sure you want to delete this file?")){
            let data = this.props.data;
            let path = this.props.path;
            if(path.length){
                console.log("this should be the folder", data[path[0]])
                let folder = data[path[0]];
                for(let i = 1; i < path.length; i++){
                    folder = folder.data[path[i]]
                }
                delete folder.data[index]
                this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                    this.props.updateData(data);
                })
            }else{
                console.log("type of data", typeof data)
                delete data[index]
                this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                    this.props.updateData(data);
                })
            }
        }
    }

    editFileName = (e, index, name) => {
        e.preventDefault();
        e.stopPropagation();
        let data = this.props.data;
        let path = this.props.path;
        if(path.length){
            console.log("this should be the folder", data[path[0]])
            let folder = data[path[0]];
            for(let i = 1; i < path.length; i++){
                folder = folder.data[path[i]]
            }
            folder.data[index].name = name;
            this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                this.props.updateData(data);
                this.setState({ editTitleOpen : false});
            })
        }else{
            console.log("type of data", typeof data)
            data[index].name = name
            this.userSession.putFile("/data", JSON.stringify(data), {encrypt : true}).then(() => {
                this.props.updateData(data);
                this.setState({ editTitleOpen : false});
            })
        }
    }

    handleEditOpen = (e, index) => {
        e.stopPropagation();
        this.setState({ titleIndex : index, editTitleOpen : true });
    }

    render(){
        const {classes} = this.props;
        const { newFileOpen, newFolderOpen, uploadFileOpen, ShowDataOpen, dataItem, editTitleOpen } = this.state;
        return(
            <div className={classes.root}>
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
                        <ListItem button onClick={() => this.handleOpen("uploadFileOpen")} >
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
                        <ListItem button onClick={this.deleteAllData}>
                            <ListItemIcon>
                                <DeleteIcon color="secondary" size="small" />
                            </ListItemIcon>
                            <ListItemText>
                                DELETE ALL DATA
                            </ListItemText>
                        </ListItem>
                    </List>
                </Toolbar>
                <Breadcrumbs aria-label="breadcrumb">
                    <p>root</p>
                    {
                        this.props.breadcrumbs.length 
                        ? this.props.breadcrumbs.map(value => <p>{value}</p>)
                        : null
                    }
                    <IconButton disabled={!this.props.path.length} onClick={() => this.props.upOneLevel()}>
                        <ArrowBackIcon />
                    </IconButton>
                </Breadcrumbs>
                {this.state.loading 
                ? <p>Loading Files...</p> 
                : 
                <List>
                    {
                    this.props.levels.length 
                    ?
                    this.props.levels[this.props.levels.length - 1].data
                        ?
                        Object.values(this.props.levels[this.props.levels.length - 1].data).map((item, index) =>
                            <ListItem key={index} button onClick={e => this.handleClick(e, index, item)}>
                                <ListItemIcon>
                                    {item.type === "file" ? <InsertDriveFileIcon /> : <FolderIcon />}
                                </ListItemIcon>
                                <ListItemText>
                                    {item.name}
                                </ListItemText>
                                <ListItemIcon>
                                    <DeleteIcon onClick={e => this.deleteFile(e, index)} color="secondary"/>
                                    <EditIcon color="primary" onClick={e => this.handleEditOpen(e, index)}/>
                                </ListItemIcon>
                            </ListItem>
                        ) 
                        : <p>No Files in this folder</p>
                    :
                    this.props.data
                        ?
                        Object.values(this.props.data).map((item, index) =>
                        <ListItem key={index} button onClick={e => this.handleClick(e, index, item)}>
                            <ListItemIcon>
                                {item.type === "file" ? <InsertDriveFileIcon /> : <FolderIcon />}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                            <ListItemIcon>
                                <DeleteIcon onClick={e => this.deleteFile(e, index)} color="secondary"/>
                                <EditIcon color="primary" onClick={e => this.handleEditOpen(e, index)}/>
                            </ListItemIcon>
                        </ListItem>
                        )
                        :<p>You Haven't Created any files yet</p>
                    }
                </List>
                }

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
                <ImportFileModal 
                    open={uploadFileOpen}
                    name="uploadFileOpen"
                    handleClose={this.handleClose}
                    submit={this.handleFileImportSubmit}
                />
                <ShowDataModal 
                    open={ShowDataOpen}
                    handleClose={this.handleClose}
                    name={"ShowDataOpen"}
                    item={dataItem}
                />
                <EditTitleModal 
                    open={editTitleOpen}
                    handleClose={this.handleClose}
                    submitHandler={this.editFileName}
                    titleIndex={this.state.titleIndex}
                />
            </div>
        )
    }
}

Homescreen.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        data : state.data,
        path : state.path,
        text : state.text,
        levels : state.levels,
        breadcrumbs : state.breadcrumbs,
    }
}
const ws = withStyles(styles)(Homescreen)
export default connect(mapStateToProps, { updateText, updateData, updatePath, downOneLevel, upOneLevel, updateFileIndex })(ws);
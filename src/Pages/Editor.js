import React from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

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

const plugins = [
    createMarkdownShortcutsPlugin()
];

class FileEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Toolbar>
                    <List>
                        <IconButton onClick={() => {this.makeBold()}}>
                            <FormatBoldIcon />
                        </IconButton>
                    </List>
                </Toolbar>
                <Paper className={classes.paper}>
                    <Editor 
                        editorState={this.state.editorState} 
                        onChange={this.onChange} 
                        plugins={plugins}
                    />
                </Paper>
            </div>
        );
    }
}

Editor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileEditor);
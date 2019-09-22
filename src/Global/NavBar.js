import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        borderRight : "2px solid blue"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    link : {
        color : "black",
        textDecoration : "none",
        '&:hover' : {
            color : "black"
        }
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <Typography variant="h6" noWrap>
                Permanent drawer
            </Typography>
            </Toolbar>
        </AppBar> */}
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <img src={Logo} alt="logo" style={{width : "100%"}} />
            <List>
            {/* Content Goes here */}
                <Link to="/profile" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon size="small" />
                        </ListItemIcon>
                        <ListItemText>
                            Profile
                        </ListItemText>
                    </ListItem>
                </Link>

                <Link to="/" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon size="small" />
                        </ListItemIcon>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/editor" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon size="small" />
                        </ListItemIcon>
                        <ListItemText>
                            Editor (Delete Later)
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
        </div>
    );
}
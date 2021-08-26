import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// import MenuItem from '@material-ui/core/MenuItem';
// import { Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import NestedMenuItem from "material-ui-nested-menu-item";
import Logo from './../Images/Logo.jpeg';



const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    listStyle: {
        backgroundColor: theme.palette.common.darkBlack,
        height: '100vh'
    },
    containerStytle: {
        backgroundColor: theme.palette.common.darkBlack,
    },
    menuText: {
        color: 'white',
        transition: theme.transitions.create(["border-bottom"], {
            duration: 1000
        }),
        "&:hover": {
            textDecoration: "none",
            borderBottom: "2px solid #66FCF1"
        }
    },
    logo:{
        width: '200px'
    }
}));

function DrawerMenu(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const [menuPosition, setMenuPosition] = useState(null);

    const handleRightClick = (e) => {
        if (menuPosition) {
            return;
        }
        e.preventDefault();
        setMenuPosition({
            top: e.pageY,
            left: e.pageX
        });
    };

    const handleItemClick = () => {
        setMenuPosition(null);
        console.log("Hello");
    };


    const toggleDrawer = (anchor, open) => (event) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.listStyle}>
                <ListItem button key="Image">
                    <img src={Logo} alt="logo" className={classes.logo}/>
                    {/* <ListItemText primary="Home" className={classes.menuText} /> */}
                </ListItem>
                <ListItem button key="Home"component={Link}
                    onClick={() => window.location = '/'}>
                    <ListItemText primary="Home" className={classes.menuText} />
                </ListItem>
                <ListItem button key="Join Online Class" component={Link}
                    onClick={() => window.location = '/our-program'}>
                    <ListItemText primary="Join Online Class" className={classes.menuText} />
                </ListItem>
                <ListItem button key="Private Tutor" component={Link}
                    onClick={() => window.location = '/get-tutor'}>
                    <ListItemText primary="Private Tutor" className={classes.menuText} />
                </ListItem>
                 <ListItem button key="Courses" component={Link}
                    onClick={() => window.location = '/comingSoon'}>
                    {/* <div onContextMenu={handleRightClick} onClick={handleRightClick} className={classes.paper}> */}
                    <ListItemText primary="Course" className={classes.menuText} />
                        {/*<Menu
                            classes={{
                                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                                // label: classes.label, // class name, e.g. `classes-nesting-label-x`
                            }}
                            open={!!menuPosition}
                            onClose={() => setMenuPosition(null)}
                            anchorReference="anchorPosition"
                            anchorPosition={menuPosition}
                        >
                            <MenuItem onClick={handleItemClick}>JEE</MenuItem>
                            <MenuItem onClick={handleItemClick}>NEET</MenuItem>
                            <NestedMenuItem
                                label="Class 12"
                                parentMenuOpen={!!menuPosition}
                            >
                                <NestedMenuItem
                                    label="CBSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Maths</MenuItem>
                                </NestedMenuItem>
                                <NestedMenuItem
                                    label="ISC"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Maths</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                            <NestedMenuItem
                                label="Class 11"
                                parentMenuOpen={!!menuPosition}
                            >
                                <NestedMenuItem
                                    label="CBSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Maths</MenuItem>
                                </NestedMenuItem>
                                <NestedMenuItem
                                    label="ISC"
                                    parentMenuOpen={!!menuPosition}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Maths</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                            <NestedMenuItem
                                label="Class 10"
                                parentMenuOpen={!!menuPosition}
                            >
                                <MenuItem onClick={handleItemClick}>CBSE</MenuItem>
                                <NestedMenuItem
                                    label="ICSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Science</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                            <NestedMenuItem label="Class 9" parentMenuOpen={!!menuPosition}>
                                <MenuItem onClick={handleItemClick}>CBSE</MenuItem>
                                <NestedMenuItem
                                    label="ICSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}>Science</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                        </Menu>
                    </div>*/}
                </ListItem> 
                <ListItem button key="Coding" component={Link}
                    onClick={() => window.location = '/comingSoon'}>
                    <ListItemText primary="Coding" className={classes.menuText} />
                </ListItem>
                <ListItem button key="Study material" component={Link}
                    onClick={() => window.location = '/comingSoon'}>
                    <ListItemText primary="Study material" className={classes.menuText} />
                </ListItem>
                <ListItem button key="Login" component={Link}
                    onClick={() => window.location = '/'} >
                    <ListItemText primary="Login" className={classes.menuText} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.containerStytle}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: 'white' }} /></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}


export default DrawerMenu;
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NestedMenuItem from "material-ui-nested-menu-item";
import Logo from './../Images/Logo.jpeg';
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.common.darkBlack
    },
    paper: {
        background: theme.palette.common.darkBlack
    },
    navigation: {
        backgroundColor: theme.palette.common.darkBlack
    },
    btn: {
        color: 'white',
        textTransform: "none",
        borderBottom: "2px solid transparent",
        transition: theme.transitions.create(["border-bottom"], {
            duration: 1000
        }),
        "&:hover": {
            textDecoration: "none",
            borderBottom: "2px solid #66FCF1"
        }
    },
    MenuItem: {
        color: 'white',
        textTransform: "none",
        borderBottom: "2px solid transparent",
        transition: theme.transitions.create(["border-bottom"], {
            duration: 1000
        }),
        "&:hover": {
            textDecoration: "none",
            borderBottom: "2px solid #66FCF1"
        }
    },
    logo: {
        color: 'white'
    },
    login: {
        paddingRight: '1.5rem',
        [theme.breakpoints.down('lg')]: {
            paddingRight: '0',
        },
    },
    logoDesign: {
        width: '7rem',
        margin: '0.5rem'
    }

}));

function MenuBar(props) {
    const classes = useStyles()
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

    return (
        <Grid container direction="row" className={classes.navigation}>
            <Grid container md={3} lg={3} className={classes.logo}>
                <img src={Logo} alt="logo" className={classes.logoDesign} />
            </Grid>
            <Grid container direction="row" md={6} lg={6} justifyContent='space-around' alignItems="center">
                <Grid>
                    <Button className={classes.btn} component={Link}
                    onClick={() => window.location = '/'} >
                        Home
                    </Button>
                </Grid>
                <Grid>
                    <Button className={classes.btn} component={Link}
                    onClick={() => window.location = '/our-program'}>
                        Join Online Class
                    </Button>
                </Grid>
                <Grid>
                    <Button className={classes.btn} component={Link}
                    onClick={() => window.location = '/get-tutor'}>
                        Private Tutor
                    </Button>
                </Grid>
                 <Grid>
                    {/* <div onContextMenu={handleRightClick} onClick={handleRightClick} className={classes.paper}> */}
                        <Button className={classes.btn} onClick={() => window.location = '/comingSoon'} >Course</Button>
                       {/* <Menu
                            classes={{
                                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                                // label: classes.label, // class name, e.g. `classes-nesting-label-x`
                            }}
                            open={!!menuPosition}
                            onClose={() => setMenuPosition(null)}
                            anchorReference="anchorPosition"
                            anchorPosition={menuPosition}
                        >
                            <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/JEE'} >JEE</MenuItem>
                            <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/NEET'} >NEET</MenuItem>
                            <NestedMenuItem
                                label="Class 12"
                                parentMenuOpen={!!menuPosition}
                            >
                                <NestedMenuItem
                                    label="CBSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick} > Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class12BioCBSE'} >Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class12MathsCBSE'} >Maths</MenuItem>
                                </NestedMenuItem>
                                <NestedMenuItem
                                    label="ISC"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick} >Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class12BioISC'} >Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class12MathsISC'} >Maths</MenuItem>
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
                                    <MenuItem onClick={handleItemClick} >Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class11BioCBSE'} >Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class11MathsCBSE'} >Maths</MenuItem>
                                </NestedMenuItem>
                                <NestedMenuItem
                                    label="ISC"
                                    parentMenuOpen={!!menuPosition}
                                >
                                    <MenuItem onClick={handleItemClick}>Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class11BioISC'} >Bio</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/Class11MathsISC'} >Maths</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                            <NestedMenuItem
                                label="Class 10"
                                parentMenuOpen={!!menuPosition}
                            >
                                <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/class10CBSE'} >CBSE</MenuItem>
                                <NestedMenuItem
                                    label="ICSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/class10CommerceICSE'} >Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/class10MathICSE'} >Science</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                            <NestedMenuItem label="Class 9" parentMenuOpen={!!menuPosition}>
                                <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/class9CBSE'} >CBSE</MenuItem>
                                <NestedMenuItem
                                    label="ICSE"
                                    parentMenuOpen={!!menuPosition}
                                // onClick={handleItemClick}
                                >
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/class9CommerceICSE'} >Commerce</MenuItem>
                                    <MenuItem onClick={handleItemClick}  component={Link}
                    onClick={() => window.location = '/class9MathICSE'} >Science</MenuItem>
                                </NestedMenuItem>
                            </NestedMenuItem>
                        </Menu>
                    </div>*/}
                </Grid>
                <Grid> 
                    <Button className={classes.btn}  component={Link}
                    onClick={() => window.location = '/comingSoon'} >
                        Coding
                    </Button>
                </Grid>
                <Grid>
                    <Button className={classes.btn} onClick={() => window.location = '/comingSoon'}>
                        Study Material
                    </Button>
                </Grid>
            </Grid>
            <Grid md={3} lg={3} container justifyContent='flex-end'>
                <Button className={classes.btn}  component={Link}
                    onClick={() => window.location = '/login'} >
                    Login
                </Button>
            </Grid>
        </Grid>
    );
}

export default MenuBar;








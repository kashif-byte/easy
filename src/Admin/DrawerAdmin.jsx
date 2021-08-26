import React, {useEffect, useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PrivateTutors from './PrivateTutors';
import PrivateStudent from './PrivateStudent';
import GeneralQuery from './GeneralQuery';
import Afterpay from './Afterpay';
import { useHistory } from 'react-router';


// const baseURL ="http://localhost:8000"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function DrawerAdmin() {
  const classes = useStyles();
  const history = useHistory()
  const [Afterpay, setAfterPay] = useState([])
  const [StudentData, setStudentData] = useState([])
  const [TeacherData, setTeacherData] = useState([])
  const [GeneralQuery, setGeneralQuery] = useState([])
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [queryType, setQueryType] = React.useState('After pay query')

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  useEffect(()=>{
    if(queryType==="General Query"){
      const token = localStorage.getItem('token')
      axios.get(`/query`, { headers: {"x-access-token" : token} }).then((res)=>{
        setGeneralQuery(res.data.flags)
      }).catch((err)=>{
        history.push('/')
      })
    }
    else if(queryType==="After pay query"){
      const token = localStorage.getItem('token')
      axios.get(`/getPayLater`, { headers: {"x-access-token" : token} }).then((res)=>{
        setAfterPay(res.data.flags)
      }).catch((err)=>{
        history.push('/')
      })
    }
    else if(queryType==="Private tutors query"){
      const token = localStorage.getItem('token')
      axios.get(`/getStudentDetail`, { headers: {"x-access-token" : token} }).then((res)=>{
        setStudentData(res.data.flags)
      }).catch((err)=>{
        history.push('/')
      })
    }
    else if(queryType==="Tutors job Query"){
      const token = localStorage.getItem('token')
      axios.get(`/getTeacherDetail`, { headers: {"x-access-token" : token} }).then((res)=>{
        setTeacherData(res.data.flags)
        console.log("khhh----->",TeacherData)
      }).catch((err)=>{
        history.push('/')
      })
    }
  },[queryType])
  const ChangeType = (type) => {
    setQueryType(type)
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const props = {GeneralQuery, TeacherData, StudentData, Afterpay, queryType}
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['General Query', 'Private tutors query', 'Tutors job Query', 'After pay query'].map((text, index) => (
            <ListItem button key={text} onClick={() => ChangeType(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <QueryComponent {...props} />
      </main>
    </div>
  );


}


const QueryComponent = (props) => {
  switch (props.queryType) {
    case 'General Query':
      return (<GeneralQuery data = {props.GeneralQuery} />);
    case 'Private tutors query':
      return (<PrivateStudent data =  {props.StudentData}/>);
    case 'Tutors job Query':
      return (<PrivateTutors data =  {props.TeacherData}/>);
    default:
      return <Afterpay data = {props.Afterpay}/>;
  }

}

export default DrawerAdmin
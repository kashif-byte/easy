import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DrawerMenu from './DrawerMenu';
import MenuBar from './MenuBar';
function Navigation(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    console.log(matches)
    return (
      <>
      <Grid>
          {matches?<MenuBar/>:<DrawerMenu/>}
      </Grid>
      </>  
    );
}

export default Navigation;
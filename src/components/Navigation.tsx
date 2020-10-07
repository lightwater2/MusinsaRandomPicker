import * as React from 'react';
import { Container, Grid, Button, Menu, MenuItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const githubLogo = require('assets/GitHub-Mark-32px.png').default;
const instagramLogo = require('assets/iconfinder_instagram_1632517.png').default;
export default () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledNavigation>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={8} sm={9}/>
        <Grid item><a href='https://www.instagram.com/y0knono/' target="_blank" rel='noreferrer'><img src={instagramLogo} width="32" height="32"/></a></Grid>
        <Grid item><a href="https://github.com/lightwater2/MusinsaRandomPicker" target="_blank" rel='noreferrer'><img src={githubLogo}/></a></Grid>
        <Grid item xs={2} sm={1}container justify="flex-end">
          <StyledButton 
            aria-controls="menu" 
            ari-haspopup="true" 
            onClick={handleClick} 
            variant="contained" 
            color="primary">
              Menu
          </StyledButton>
        </Grid>
      </Grid>
      <Menu 
      id="menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component="a" href="/" target="_blank" rel='noreferrer'>MusinsaRandomPicker</MenuItem>
      </Menu>
    </StyledNavigation>
  );
}
const StyledNavigation = styled(Container)`
  padding-top:10px;
`;
const StyledButton = styled(Button)`
`;
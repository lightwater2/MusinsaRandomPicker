import * as React from 'react';
import { randomInt } from 'mathjs';
import { Redirect } from 'react-router';
import { isBrowser } from 'react-device-detect';
import { Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import 'fontsource-roboto';

import axios from 'axios';
export default () => {
  const url = 'https://store.musinsa.com/app/product/detail/';
  const Dice = () => {
    const productNumber = randomInt(0,1630000);
    window.open(url+productNumber,'_blank','noreferrer');
  };
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <StyledTypography align='center' variant="h3" gutterBottom>MUSINSA<br />Random Picker</StyledTypography>
      <Button onClick={Dice} variant="contained" color="secondary">
        Random Pick!
      </Button>
    </Grid>
  )
}
const StyledTypography = styled(Typography)`
  padding-top:22vh;
`;
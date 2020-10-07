import * as React from 'react';
import { randomInt } from 'mathjs';
import { Redirect } from 'react-router';
import { isBrowser } from 'react-device-detect';
import { Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import 'fontsource-roboto';

import {Adsense} from '@ctrl/react-adsense';

export default () => {
  const url = 'https://store.musinsa.com/app/product/detail/';
  const Dice = () => {
    const productNumber = randomInt(0,1630000);
    window.open(url+productNumber,'_blank','noreferrer');
  }
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
      <Adsense 
        client="ca-pub-9827250308558693"
        slot="7216266619" 
        style={{ display:'bloack'}}
        format="auto"
        full-width-responsive="true"
      />
    </Grid>
  )
}
const StyledTypography = styled(Typography)`
  padding-top:18vh;
`;
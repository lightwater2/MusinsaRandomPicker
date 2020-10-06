import * as React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import 'fontsource-roboto';
export default () => {
  const url = 'https://store.musinsa.com/app/product/detail/';
  const productNumber = getRandomInt(0,1636658);
  return(
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <StyledTypography align='center' variant="h3" gutterBottom>MUSINSA<br />Random Picker</StyledTypography>
    <Button variant="contained" color="secondary" component="a" href={url+productNumber}>Random Pick!</Button>
  </Grid>

  )
}
function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
const StyledTypography = styled(Typography)`
  padding-top:18vh;
`;
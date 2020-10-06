import * as React from 'react';

import GlobalStyle from 'styles/global-style';
import Navigation from 'components/Navigation';
import Home from 'pages/Home';
export default () => (
  <>
    <GlobalStyle/>
    <Navigation/>
    <Home/>
  </>
)
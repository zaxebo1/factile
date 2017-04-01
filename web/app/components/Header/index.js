/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router'
import messages from './messages';

const Box = styled.div`
  padding: 5px 1em;
  background-color: #222;
  color: #FFF;
  border-bottom: 1px solid #222;

  h3 {
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

function Header() {
  return (
    <Box>
      <h3><Link to="/">Factile</Link></h3>
    </Box>
  );
}

Header.propTypes = {

};

export default Header;

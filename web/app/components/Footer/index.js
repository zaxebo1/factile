/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const FooterBox = styled.section`
  background-color: #222;
  color: #fff;
  padding: 2%;
  font-size: 0.8em;
`;

function Footer() {
  return (
    <FooterBox>
    This is an open source survey platform released under the LGPL license. It is built with Open Source Software Libraries.
    &copy; 2017 Aishwarya Singhal. All rights reserved.
    </FooterBox>
  );
}

Footer.propTypes = {

};

export default Footer;

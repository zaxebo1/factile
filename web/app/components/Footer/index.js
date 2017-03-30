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
  color: #fff;
`;

const MainFooter = styled.div`
  background-color: #333;
  padding: 2%;
`;

const Copyright = styled.div`
  background-color: #222;
  font-size: 0.8em;
  padding: 1% 2%;
`;

const FooterLinks = styled.ul`
  list-style: none;
`;

const FooterLink = styled.a`
  color: #FFF;
`;

function Footer() {
  return (
    <FooterBox>
      <MainFooter>
        <div>
          <FooterLinks>
            <li><FooterLink href="http://asinghal.github.com/factile/">Downloads</FooterLink></li>
            <li><FooterLink href="/assets/html/terms.html">Terms Of Use</FooterLink></li>
            <li><FooterLink href="/assets/html/contact.html">Contact Us</FooterLink></li>
            <li><FooterLink href="/assets/html/faq.html">FAQ</FooterLink></li>
          </FooterLinks>
        </div>
      </MainFooter>
      <Copyright>
        <div>This is an open source survey platform released under the LGPL license. It is built with Open Source Software Libraries.</div>
        <div>&copy; 2017 Aishwarya Singhal. All rights reserved.</div>
      </Copyright>
    </FooterBox>
  );
}

Footer.propTypes = {

};

export default Footer;

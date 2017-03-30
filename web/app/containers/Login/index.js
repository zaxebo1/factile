/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectLogin from './selectors';
import messages from './messages';

const Form = styled.div`
  width: 400px;
  max-width: 95%;
  height: 40%;
  position: absolute;
  top: 100px;
  right: 2%;
  z-index: 101;
  background-color: #FFF;
  opacity: 0.4;
  color: #000;
  padding: 2%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

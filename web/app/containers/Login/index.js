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

  input {
    height: 2em;
    width: 100%;
    margin: 1em 0;
    background-color: #333;
    color: #FFF;
    padding: 5px;
  }

  button {
    background-color: #0074cc;
    color: #FFF;
    margin: 1em 0;
    padding: 5px;
    width: 100%;
  }
`;

export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Form>
        <div id="signin">
          <h2>Login</h2>
          <form>
            <div>
              <input type="email" name="username" placeholder="Email address" autoComplete={false} />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <button>Sign in</button>
            </div>
          </form>
        </div>
        <h2>- OR -</h2>
        <div id="register">
          <h2>Register</h2>
          <form>
            <div>
              <input type="email" name="username" placeholder="Email address" autoComplete={false} />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <input type="password" name="password2" placeholder="Confirm Password" />
            </div>
            <div>
              <button>Sign up</button>
            </div>
          </form>
        </div>
      </Form>
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

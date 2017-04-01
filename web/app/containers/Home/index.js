/*
 *
 * Home
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import makeSelectHome from './selectors';
import messages from './messages';
import BackgroundImage from './background.jpg';

import FeatureList from '../../components/FeatureList';
import Login from '../Login';

const Background = styled.img`
  width: 100%;
`;

const Banner = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Welcome = styled.div`
  position: absolute;
  z-index: 101;
  top: 100px;
  max-width: 40%;
  left: 2%;
  color: #FFF;
`;

const LoginBox = styled.div`
  width: 400px;
  max-width: 95%;
  min-height: 40%;
  position: absolute;
  top: 100px;
  right: 2%;
  z-index: 101;
  background-color: #000;
  opacity: 0.6;
  color: #FFF;
  padding: 2%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const FeatureSection = styled.section`
  text-align: center;

  h1, h3 {
    color: #000;
  }
`;

const Features = styled.div`
  display: flex;
  text-align: left;
`;

const Feature = styled.div`
  width: 28%;
  display: inline-block;
  padding: 1%;
  margin: 2%;
  color: rgb(113, 109, 110);
`;

export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Banner>
          <Welcome>
            <h1><FormattedMessage {...messages.title} /></h1>
            <p><FormattedMessage {...messages.welcome} /></p>
          </Welcome>

          <LoginBox>
            <Login />
          </LoginBox>
          <Background src={BackgroundImage} />
        </Banner>
        <FeatureSection>
          <h1>Modern and elegant surveys to capture the data you need</h1>
          <Features>
            <Feature>
              <h3><FontAwesome name='telegram' />&nbsp;Free Online Surveys</h3>
              <p>Design and share unlimited surveys at zero cost (100% free). This free online survey tool provides many advanced features as flow logic, offline survey capability, mobile/ iPad support - features that other tools would charge for!</p>
            </Feature>
            <Feature>
              <h3><FontAwesome name='pie-chart' />&nbsp;Powerful Analytics and Easy Insights</h3>
              <p>There are pretty cool analysis tools too! Build pie charts, bar charts, or look at a word tag cloud to get quick insights. Or, just group questions and define filters and let this free online survey tool tell you the top 5 audience picked combinations!</p>
            </Feature>
            <Feature>
              <h3><FontAwesome name='desktop' />&nbsp;<FontAwesome name='tablet' />&nbsp;Surveys that Work Anywhere</h3>
              <p>You design the questionnaire, and we deliver an online survey that runs anywhere. Your audience may take the survey on a mobile phone, or a laptop, or a tablet. Oh, did we mention your audience could take the surveys in transit, even when they have a flaky internet connection? All that just comes naturally!</p>
            </Feature>
          </Features>
        </FeatureSection>
        <FeatureList />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

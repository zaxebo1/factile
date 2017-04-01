/*
 *
 * MySurveys
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { selectSurveys } from './selectors';
import { getSurveys } from './actions';
import messages from './messages';

const Page = styled.div`

  padding: 2em;

  table {
    border: 0;
    width: 100%;
    margin-bottom: 3em;

    th {
      border-bottom: 1px solid #ddd;
      text-align: left;
      text-transform: uppercase;
    }
  }
`;

const NewSurvey = styled.button`
  background-color: #0074cc;
  color: #FFF;
  margin: 1em 0;
  padding: 0.5em 2em;
  box-shadow: 3px 3px 3px #AAA;
  float: right;
`;

export class MySurveys extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.fetchSurveys();
  }

  getSurveys() {
    return this.props.surveys.map((survey, index) => {

      return (
        <tr key={index}>
          <td>{survey.name}</td>
          <td>{survey.created_at}</td>
          <td>{survey.status}</td>
        </tr>
      );
    });
  }

  getSurveyList() {
    return (
      <tbody>
        {this.getSurveys()}
      </tbody>
    );
  }

  render() {

    return (
      <Page>
        <NewSurvey>New Survey</NewSurvey>
        <h1><FormattedMessage {...messages.header} /></h1>
        <table>
          <thead>
            <tr>
              <th><FormattedMessage {...messages.table.title} /></th>
              <th><FormattedMessage {...messages.table.created} /></th>
              <th><FormattedMessage {...messages.table.status} /></th>
            </tr>
          </thead>
          {this.getSurveyList()}
        </table>
      </Page>
    );
  }
}

MySurveys.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  surveys: selectSurveys(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchSurveys: () => dispatch(getSurveys())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MySurveys);

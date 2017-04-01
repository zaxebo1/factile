/**
*
* FeatureList
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import FontAwesome from 'react-fontawesome';
import messages from './messages';

const FeatureBox = styled.div`
  padding: 3%;
  background-color: #FFF;
  color: #333;

  h1 {
    text-align: center;
  }
`;

const Row = styled.div`
  margin: 1em 0;
  display: flex;
`;

const Feature = styled.div`
  width: 47%;
  margin: 1em;
  background-color: #fff;
  color: rgb(113, 109, 110);
`;

const Icon = styled.span`
  font-size: 1.4em;
  font-weight: 900;
  color: #000;

  span {
    font-size: 2em;
    color: #0074cc;
    margin: 0 0.5em 0 0;
  }
`;

function FeatureList() {
  return (
    <FeatureBox>
      <div>
        <h1>The Coolest Surveying Tool Available!</h1>
      </div>

      <Row>
        <Feature>
          <Icon><FontAwesome name='question-circle' />Various Question Types</Icon>
          <p>Design a survey with multiple pages and multiple questions, just as fast as you can type! The different question types that are available are:</p>
            <ol>
              <li>Text boxes</li>
              <li>Radio buttons</li>
              <li>Check boxes</li>
              <li>Combo boxes (dropdowns)</li>
              <li>Large Text areas</li>
              <li>Rating scales</li>
              <li>Ranking</li>
              <li>Plain texts</li>
            </ol>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='tablet' />Surveys That Run Anywhere</Icon>
          <p>
            </p><ol>
              <li>Natural and adaptive support for various computer screen resolutions.</li>
              <li>Support for iPhone/ iPads</li>
              <li>Support for Blackberry handhelds.</li>
              <li>Support for most other mobile devices!</li>
            </ol>
          <p></p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='pie-chart' />Analyse The Captured Data</Icon>
          <p>
            </p><ol>
              <li>Build charts for individual questions.</li>
              <li>Export the data as Excel.</li>
              <li>Analyze textual responses via word clouds.</li>
              <li>Group questions and build charts for the cumulative view.</li>
              <li>Draw insights on grouped questions.</li>
            </ol>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='th-large' />Customize the Survey Look and Feel</Icon>
          <p>
            </p><ol>
              <li>Add your logo.</li>
              <li>Define your color scheme.</li>
              <li>Define whether you want a progress bar or not.</li>
            </ol>
          <p></p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='check' />Surveys That Work Offline</Icon>
          <p>Even if the participants take your survey in transit (trains/ air planes/ etc) and do not have a proper network, they can fill in the survey. They just need to click on "Work Offline" link on the survey, fill in the survey and then click on "Send Responses" once they are back on network. As simple as that!</p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='bar-chart' />Powerful Analysis</Icon>
          <p>Draw insights easily with Factiles powerful analytical ability. Group a set of questions and generate a report on most preferred answer combinations, across different permutations!</p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='tasks' />Manage The Survey Flow</Icon>
          <p>Allows you to define simple jump logic (e.g. go to page 10 if user clicks x, or skip page 5 if users answer to a question has a perticular word/ phrase).</p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='th' />Start With A Template</Icon>
          <p>Use one of the predefined questionnaires as a starting point and customize it to suit your needs.</p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='language' />Multiple Languages</Icon>
          <p>Support for 10 languages.
            </p><ol>
              <li>Build the survey in any language.</li>
              <li>Survey layout detection for right to left languages like Arabic and Hebrew.</li>
              <li>Fully customizable survey text.</li>
            </ol>
          <p></p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='mobile' />Special Design For Smart Phones</Icon>
          <p>Radio buttons, checkboxes, ranking or rating scales that look like iPhone and work easily with touch phones.</p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='eye' />Preview Survey Before Sending It Out</Icon>
          <p>See for yourself what the survey would look like, just while you design it!</p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='share' />Sharing Made Easy</Icon>
          <p>Invite participants through email, or make it an open survey and just share the link on Facebook/ Twitter/ anywhere!</p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='users' />Collaborate</Icon>
          <p>Add other collaborators to your survey so they could make changes or view data as well.</p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='address-book' />Address Book</Icon>
          <p>Maintain an address book of frequently used email addresses.</p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='plane' />High Performance</Icon>
          <p>A highly performant interface that promises quick turnaround of surveys. Design and share surveys just as fast as you can type!</p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='child' />Easy to use</Icon>
          <p>Surveys and market research are complex matters anyways! Build a survey here with a very intuitive interface in the smallest number of clicks.</p>
        </Feature>
      </Row>

      <Row>
        <Feature>
          <Icon><FontAwesome name='shield' />Security</Icon>
          <p>The survey and its data are safely secured by Factile. Multiple checks and encryption ensure that only the intended users have access to your data.</p>
        </Feature>
        <Feature>
          <Icon><FontAwesome name='download' />Download Me!</Icon>
          <p>This is free software and you can download and install on your infrastructure.</p>
        </Feature>
      </Row>

    </FeatureBox>
  );
}

FeatureList.propTypes = {

};

export default FeatureList;

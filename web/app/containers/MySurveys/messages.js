/*
 * MySurveys Messages
 *
 * This contains all the text for the MySurveys component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.MySurveys.header',
    defaultMessage: 'My Surveys',
  },
  table: {
    title: {
      id: 'app.containers.MySurveys.table.title',
      defaultMessage: 'Title',
    },
    created: {
      id: 'app.containers.MySurveys.table.created',
      defaultMessage: 'Created',
    },
    status: {
      id: 'app.containers.MySurveys.table.status',
      defaultMessage: 'Status',
    }
  }
});

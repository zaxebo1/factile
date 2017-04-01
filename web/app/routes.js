// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Home/reducer'),
          import('containers/Home/sagas'),
          import('containers/Home'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'mySurveys',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MySurveys/reducer'),
          import('containers/MySurveys/sagas'),
          import('containers/MySurveys'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('mySurveys', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/surveys/new',
      name: 'surveyInformation',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SurveyInformation/reducer'),
          import('containers/SurveyInformation/sagas'),
          import('containers/SurveyInformation'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('surveyInformation', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/surveys/questions',
      name: 'surveyQuestions',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/SurveyQuestions/reducer'),
          import('containers/SurveyQuestions/sagas'),
          import('containers/SurveyQuestions'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('surveyQuestions', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/surveys/preview',
      name: 'preview',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Preview/reducer'),
          import('containers/Preview/sagas'),
          import('containers/Preview'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('preview', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/surveys/invite',
      name: 'invitations',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Invitations/reducer'),
          import('containers/Invitations/sagas'),
          import('containers/Invitations'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('invitations', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}

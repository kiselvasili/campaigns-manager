import angular from 'angular';
import ngRedux from 'ng-redux';
import ngReduxDevTools from 'ng-redux-dev-tools';
import rootReducer from './redux/reducers/campaign.reducer';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    ngRedux,
    ngReduxDevTools,
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider, $ngReduxProvider, devToolsServiceProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $ngReduxProvider.createStoreWith(rootReducer, [], [devToolsServiceProvider.instrument()]);
  })

  .component('app', AppComponent);

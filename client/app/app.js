import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './redux/reducers/index';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    ngRedux,
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider, $httpProvider, $ngReduxProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $ngReduxProvider.createStoreWith(rootReducer, []);
    $httpProvider.interceptors.push('HttpInterceptor');
  })

  .component('app', AppComponent);

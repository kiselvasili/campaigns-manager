import angular from 'angular';
import uiRouter from 'angular-ui-router';
import campaignListComponent from './campaign-list.component';
import campaignSvcModule from '../../services/campaign-service/campaign.service';

let campaignListModule = angular.module('campaignListModule', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('campaign-list', {
      url: '/',
      component: 'campaignListComponent'
    });
})

.component('campaignListComponent', campaignListComponent)
  
.name;

export default campaignListModule;

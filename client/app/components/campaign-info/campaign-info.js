import angular from 'angular';
import uiRouter from 'angular-ui-router';
import campaignInfoComponent from './campaign-info.component';
import campaignSvcModule from '../../services/campaign-service/campaign.service';
import highcharts from 'highcharts-ng';

let campaignInfoModule = angular.module('campaignInfoModule', [
    uiRouter,
    campaignSvcModule,
    highcharts
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('campaign-stat', {
        url: '/campaign-stat/:id/:name',
        component: 'campaignInfoComponent',
        data: {hello: 'hello data'},
        params: { idid: 'hello params' }
    });
})

.component('campaignInfoComponent', campaignInfoComponent)

.name;

export default campaignInfoModule;
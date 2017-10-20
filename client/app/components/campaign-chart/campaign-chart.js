import angular from 'angular';
import campaignChartComponent from './campaign-chart.component';

let campaignChartModule = angular.module('campaignChartModule', [])

.component('campaignChartComponent', campaignChartComponent)

.name;

export default campaignChartModule;
import angular from 'angular';
import chartConfig from './chartConfig';
import baseUrl from './baseUrl';

let constantModule = angular.module('constants', [])

    .constant('chartConfig', chartConfig)
    .constant('baseUrl', baseUrl)

    .name;

export default constantModule;
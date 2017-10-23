import angular from 'angular';
import chartConfig from './chartConfig';
import apiUrl from './apiUrl';

let constantModule = angular.module('constants', [])

    .constant('chartConfig', chartConfig)
    .constant('apiUrl', apiUrl)

    .name;

export default constantModule;
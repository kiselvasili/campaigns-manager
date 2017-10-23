import angular from 'angular';
import chartConfig from './chartConfig';
import baseUrl from './baseUrl';

let constantModule = angular.module('constants', [])

    .constant('chartConfig', {
        chart: {
            type: 'spline'
        },
        series: [{
            data: [],
            type: false
        }],
        title: {
            text: false
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: false
            }
        },
        legend: { enabled: false },
        exporting: { enabled: false },

        credits: { enabled: false }
    })
    .constant('baseUrl', 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns')

    .name;

export default constantModule;
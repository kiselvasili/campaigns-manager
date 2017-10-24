import angular from 'angular';
import Services from './campaign-service/campaign.module';
import HttpModule from './http/http.module';

const ServicesModule = angular.module('app.services', [
        Services,
        HttpModule
    ])

    .name;

export default ServicesModule;
import angular from 'angular';
import CampaignService from './campaign.service';

let campaignModule = angular.module('app.campaignSvcModule', [])
    .service('campaignSvc', CampaignService)

    .name;

export default campaignModule;
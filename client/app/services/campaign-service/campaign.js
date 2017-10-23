import angular from 'angular';
import CampaignService from './campaign.service';

let campaignSvcModule = angular.module('campaignSvcModule', [])
    .service('campaignSvc', CampaignService)

    .name;

export default campaignSvcModule;
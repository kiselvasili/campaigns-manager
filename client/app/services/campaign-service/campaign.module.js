import angular from 'angular';
import CampaignSvc from './campaign.service';

let campaignSvcModule = angular.module('campaignSvcModule', [])
    .service('CampaignSvc', CampaignSvc)

    .name;

export default campaignSvcModule;
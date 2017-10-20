import angular from 'angular';
import CampaignList from './campaign-list/campaign-list';
import CampaignInfo from './campaign-info/campaign-info';

let componentModule = angular.module('app.components', [
  CampaignList,
  CampaignInfo
])

.name;

export default componentModule;

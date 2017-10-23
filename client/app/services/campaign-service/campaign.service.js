import angular from 'angular';
import * as CampaignAction from '../../redux/actions/campaign.action';

class campaignSvc{
    constructor($http, $ngRedux, baseUrl) {

        'ngInject';

        this.baseUrl = baseUrl

        this.http = $http;

        this.getCanpaigns()
            .then((data) => {
                $ngRedux.dispatch(CampaignAction.setCampaign(data.data));
                // CampaignAction.setCampaign(data.data);
                // this.campaignStats = data.data;
            });

    }

    getCanpaigns() {
        console.log('base url', this.baseUrl);
        return this.http({
            method: 'GET',
            url: `${this.baseUrl}`
        });
    }

    getCampaignStats(id) {
        console.log(id);
        return this.http({
            method: 'GET',
            url: `${this.baseUrl}/${id}/stats`
        });
    }

    activateStatus(id) {
        return this.http({
            method: 'POST',
            url: `${this.baseUrl}/${id}/activate`
        });
    }

    deactivateStatus(id) {
        return this.http({
            method: 'POST',
            url: `${this.baseUrl}/${id}/deactivate`
        });
    }
}

let campaignSvcModule = angular.module('campaignSvcModule', [])
    .service('campaignSvc', campaignSvc)

    .name;

export default campaignSvcModule;
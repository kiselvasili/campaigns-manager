import angular from 'angular';
import * as CampaignAction from '../../redux/actions/campaign.action';

class campaignSvc{
    constructor($http, $ngRedux, apiUrl) {

        'ngInject';

        this.apiUrl = apiUrl;

        this._$http = $http;

        this.getCanpaigns()
            .then((data) => {
                $ngRedux.dispatch(CampaignAction.setCampaign(data.data));
            });

    }

    getCanpaigns() {
        return this._$http({
            method: 'GET',
            url: `${this.apiUrl}`
        });
    }

    getCampaignStats(id) {
        return this._$http({
            method: 'GET',
            url: `${this.apiUrl}/${id}/stats`
        });
    }

    activateStatus(id) {
        return this._$http({
            method: 'POST',
            url: `${this.apiUrl}/${id}/activate`
        });
    }

    deactivateStatus(id) {
        return this._$http({
            method: 'POST',
            url: `${this.apiUrl}/${id}/deactivate`
        });
    }
}

let campaignSvcModule = angular.module('campaignSvcModule', [])
    .service('campaignSvc', campaignSvc)

    .name;

export default campaignSvcModule;
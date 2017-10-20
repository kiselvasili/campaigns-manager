import angular from 'angular';

class campaignSvc{
    constructor($http) {

        'ngInject';

        this.http = $http;
    }

    getCanpaigns() {
        return this.http({
            url: `https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns`
        });
    }

    getCampaignStats(id) {
        console.log(id);
        return this.http({
            url: `https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns/${id}/stats`
        });
    }
}

let campaignSvcModule = angular.module('campaignSvcModule', [])
    .service('campaignSvc', campaignSvc)

    .name;

export default campaignSvcModule;
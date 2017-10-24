import * as CampaignAction from '../../redux/actions/campaign.action';

class CampaignSvc{
    constructor($http, $ngRedux, apiUrl) {

        'ngInject';

        this.apiUrl = apiUrl;

        this._$http = $http;

        this.getCanpaigns()
            .then((data) => {
                if (!data) {
                    return;
                }
                $ngRedux.dispatch(CampaignAction.setCampaigns(data));
            });

    }

    getCanpaigns() {
        return this._$http.get(`${this.apiUrl}`);
    }

    getCampaignStats(id) {
        return this._$http.get(`${this.apiUrl}/${id}/stats`);
    }

    activateStatus(id) {
        return this._$http.post(`${this.apiUrl}/${id}/activate`);
    }

    deactivateStatus(id) {
        return this._$http.post(`${this.apiUrl}/${id}/deactivate`);
    }
}

export default CampaignSvc;
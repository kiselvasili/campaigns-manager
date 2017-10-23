import * as CampaignAction from '../../redux/actions/campaign.action';

class CampaignListController {
    constructor($ngRedux, $scope, campaignSvc) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        $ngRedux.subscribe(() => {
            let state = $ngRedux.getState();
            this.campaign = state.campaignsReducer.campaigns.campaigns;
        })
    }

    activateStatus(id) {
        this._campaignSvc.activateStatus(id)
            .then((data) => {
                console.log(data);
            })
    } 

    deactivateStatus(id) {
        this._campaignSvc.activateStatus(id)
            .then((data) => {
                console.log(data);
            })
    } 
}

export default CampaignListController;

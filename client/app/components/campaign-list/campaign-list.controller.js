import * as CampaignAction from '../../redux/actions/campaign.action';
import { ReduxUtil } from '../../redux/redux.util';

class CampaignListController {
    constructor($ngRedux, $scope, campaignSvc) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        const unsubscribe = $ngRedux.connect(ReduxUtil.mapStateToThis, CampaignAction)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    activateStatus(id) {
        let campaign = this.campaigns.find(campaign => campaign.id === id);
        this._campaignSvc.activateStatus(id)
            .then((data) => {
                campaign.status = 'INACTIVE';
            })
    } 

    deactivateStatus(id) {
        let campaign = this.campaigns.find(campaign => campaign.id === id);
        this._campaignSvc.activateStatus(id)
            .then((data) => {
                campaign.status = 'ACTIVE';
            })
    }
}

export default CampaignListController;

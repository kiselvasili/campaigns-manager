import * as CampaignAction from '../../redux/actions/campaign.action';
import { ReduxUtil } from '../../redux/redux.util';

class CampaignListController {
    constructor($ngRedux, $scope, campaignSvc) {

        'ngInject';

        let statuses = {
            active: 'ACTIVE',
            disctive: 'INACTIVE'
        };

        this._campaignSvc = campaignSvc;

        const unsubscribe = $ngRedux.connect(ReduxUtil.mapStateToThis, CampaignAction)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    activateStatus(id) {
        let campaign = this.campaigns.find(campaign => campaign.id === id);
        this._campaignSvc.activateStatus(id)
            .then((data) => {
                campaign.status = this.statuses.active;
            })
    } 

    deactivateStatus(id) {
        let campaign = this.campaigns.find(campaign => campaign.id === id);
        this._campaignSvc.activateStatus(id)
            .then((data) => {
                campaign.status = this.statuses.disctive;
            })
    }
}

export default CampaignListController;

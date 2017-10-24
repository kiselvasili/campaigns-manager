import * as CampaignAction from '../../redux/actions/campaign.action';
import { ReduxUtil } from '../../redux/redux.util';

class CampaignListController {
    constructor($scope, $ngRedux, CampaignSvc) {

        'ngInject';

        this.statuses = {
            active: 'ACTIVE',
            disactive: 'INACTIVE'
        };

        this._campaignSvc = CampaignSvc;

        const unsubscribe = $ngRedux.connect(ReduxUtil.mapStateToThis, CampaignAction)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    activateStatus(campaign) {
        this._campaignSvc.activateStatus(campaign.id)
            .then((data) => {
                campaign.status = this.statuses.active;
            })
    } 

    deactivateStatus(campaign) {
        this._campaignSvc.activateStatus(campaign.id)
            .then((data) => {
                campaign.status = this.statuses.disactive;
            })
    }
}

export default CampaignListController;

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
        this._campaignSvc.activateStatus(id)
            .then((data) => {
            })
    } 

    deactivateStatus(id) {
        this._campaignSvc.activateStatus(id)
            .then((data) => {
            })
    }
}

export default CampaignListController;

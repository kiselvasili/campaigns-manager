import { ReduxUtil } from '../../redux/redux.util';
import cloneDeep from 'lodash/cloneDeep';

class CampaignInfoController {
    constructor($scope, $stateParams, $state, $ngRedux, CampaignSvc, chartConfig) {

        'ngInject';

        this._campaignSvc = CampaignSvc;
        this.compaignName = $stateParams.name;
        this.compaignId = $stateParams.id;

        const unsubscribe = $ngRedux.connect(ReduxUtil.mapStateToThis)(this);
        $scope.$on('$destroy', unsubscribe);

        this.init();

        this.chartConfig = cloneDeep(chartConfig);

    }

    getAllCampaignStats() {
        this._campaignSvc.getCampaignStats(this.compaignId)
            .then((data) => {
                this.campaignStats = data;
                if (!this.campaignStats){
                    return
                }
                this.campaignStats.forEach(item => {
                    this.chartConfig.series[0].data.push(item.impressions);
                    this.chartConfig.xAxis.categories.push(item.date);
                });
            });
    }

    init() {
        this.getAllCampaignStats();
    }

}

export default CampaignInfoController;
import { ReduxUtil } from '../../redux/redux.util';
import cloneDeep from 'lodash/cloneDeep';

class CampaignInfoController {
    constructor($stateParams, campaignSvc, $state, $ngRedux, $scope, chartConfig) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        this.compaignName = $stateParams.name;
        this.compaignId = $stateParams.id;

        const unsubscribe = $ngRedux.connect(ReduxUtil.mapStateToThis)(this);
        $scope.$on('$destroy', unsubscribe);

        this.getAllCampaignStats();

        this.chartConfig = cloneDeep(chartConfig);

    }

    getAllCampaignStats() {
        this._campaignSvc.getCampaignStats(this.compaignId)
            .then((data) => {
                console.log('state', data.data);
                this.campaignStats = data.data;
                this.campaignStats.forEach(item => {
                    this.chartConfig.series[0].data.push(item.impressions);
                    this.chartConfig.xAxis.categories.push(item.date);
                });
            });
    }

}

export default CampaignInfoController;
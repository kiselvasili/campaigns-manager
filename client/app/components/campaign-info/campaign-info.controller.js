import { ReduxUtil } from '../../redux/redux.util';

class CampaignInfoController {
    constructor($stateParams, campaignSvc, $state, $ngRedux, $scope, chartConfig) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        this._params = $state;

        this.compaignName = $stateParams.name;
        this.compaignId = $stateParams.id;

        const unsubscribe = $ngRedux.connect(ReduxUtil.mapStateToThis)(this);
        $scope.$on('$destroy', unsubscribe);

        this.getAllCampaignStats();

        this.chartConfig = chartConfig;

    }

    getAllCampaignStats() {
        this._campaignSvc.getCampaignStats(this.compaignId)
            .then((data) => {
                this.campaignStats = data.data;
                this.chartConfig.series[0].data = this.campaignStats.map(item => item.impressions);
                this.chartConfig.xAxis.categories = this.campaignStats.map(item => item.date);
            });

    }

    mapStateToThis(state) {
        return {
            campaign: state.campaignsReducer.campaigns.campaigns
        };
    }

}

export default CampaignInfoController;
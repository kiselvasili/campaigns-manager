class CampaignInfoController {
    constructor($stateParams, campaignSvc, $state, $ngRedux, chartConfig) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        this._params = $state;

        this.compaignName = $stateParams.name;
        this.compaignId = $stateParams.id;
        $ngRedux.subscribe(() => {
            let state = $ngRedux.getState();
            console.log(state);
            this.campaigns = state.campaignsReducer.campaigns.campaigns;
        })
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

}

export default CampaignInfoController;
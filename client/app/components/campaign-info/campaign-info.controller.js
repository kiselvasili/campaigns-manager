class CampaignInfoController {
    constructor($stateParams, campaignSvc) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        this.compaignName = $stateParams.name;
        this.compaignId = $stateParams.id;
        this.getAllCampaignStats();
        this.getAllCampaigns();

        this.chartConfig = {
                chart: {
                    type: 'line'
                },
                series: [{
                    data: [],
                    type: 'spline',
                    id: 'series1'
                }],
                title: {
                    text: 'Hello'
                },
                xAxis: [{
                    type: 'datetime'
                }],
                yAxis: [{ // Primary yAxis
                    title: {
                    text: 'number of notification',
                    }
                }, { // Secondary yAxis
                    title: {
                    text: 'usage time',
                    },
                    opposite: true
                }],
                legend: {
                    floating: true
                },
                exporting: {enabled: false},

                credits: {enabled: false}
            };

    }

    getAllCampaignStats() {
        this._campaignSvc.getCampaignStats(this.compaignId)
            .then((data) => {
                this.campaignStats = data.data;
                this.chartConfig.series[0].data = this.campaignStats.map(item => item.impressions);
            });

    }

    getAllCampaigns() {
        this._campaignSvc.getCanpaigns()
            .then((data) => {
              console.log(data);
                this.campaigns = data.data;
            });

    }

}

export default CampaignInfoController;
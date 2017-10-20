class CampaignListController {
    constructor(campaignSvc) {

        'ngInject';

        this._campaignSvc = campaignSvc;

        this.getAllCampaigns();


    }
    
    getAllCampaigns() {
        this._campaignSvc.getCanpaigns()
            .then((data) => {
              console.log(data);
                this.campaignStats = data.data;
            });

    }

}

export default CampaignListController;

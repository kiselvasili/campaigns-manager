class ReduxUtil {
    constructor() {}

    static mapStateToThis(state) {
        let campaign = state.campaignsReducer.campaigns.campaigns;
        return {
            campaign
        };
    }
}

export { ReduxUtil };
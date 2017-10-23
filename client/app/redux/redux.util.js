class ReduxUtil {
    constructor() {}

    static mapStateToThis(state) {
        return {
            campaign: state.campaignsReducer.campaigns.campaigns
        };
    }
}

export { ReduxUtil };
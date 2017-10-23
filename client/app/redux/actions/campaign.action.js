import * as types from '../../constants/ActionTypes';

export function setCampaign(campaigns) {
    return {
        type: types.SET_CAMPAIGN,
        payload: { campaigns }
    }
}
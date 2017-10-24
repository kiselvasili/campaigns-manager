import * as types from './actionTypes';

export function setCampaigns(campaigns) {
    return {
        type: types.SET_CAMPAIGN,
        payload: { campaigns }
    }
}
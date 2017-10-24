import { SET_CAMPAIGN } from '../actions/actionTypes';

export const INITIAL_STATE = {
    campaigns: []
};

function campaignsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_CAMPAIGN: {
            state.campaigns = action.payload;
        }
        default:
            return state;
    }
}

export default campaignsReducer;
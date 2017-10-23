import { SET_CAMPAIGN } from '../../constants/ActionTypes';

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
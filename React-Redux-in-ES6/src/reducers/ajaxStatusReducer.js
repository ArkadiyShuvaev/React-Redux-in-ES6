import * as ActionTypes from "../actions/actionTypes";
import InitialState from "./initialState";

const actionTypeEndInSuccess = (actionType) => {
    return actionType.substring(actionType.length - 8) === "_SUCCESS";
};

export default function (state = InitialState.ajaxCallsInProgressCount, action) {
    
    if (action.type === ActionTypes.BEGIN_ASYNC_CALL) {
        return state + 1;
    } else if (actionTypeEndInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}

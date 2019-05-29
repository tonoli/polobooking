import { combineReducers } from "redux";

import authReducer from "reducers/authReducer";
import statCardReducer from "reducers/statCardReducer";
import listingReducer from "reducers/listingReducer";

export default combineReducers({
  authState: authReducer,
  statCardState: statCardReducer,
  listingState: listingReducer,
});

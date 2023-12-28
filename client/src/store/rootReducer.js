import { combineReducers } from 'redux';
import userReducer from '../modules/COMMON/redux/userReducer';
import commonReducer from '../modules/COMMON/redux/commonReducer';
import progressReducer from '../modules/COMMON/redux/progressReducer';
import lineupsReducer from '../modules/Lineups/redux/lineupsReducer';



const rootReducer = combineReducers({
    progress: progressReducer,
    user: userReducer,
    common: commonReducer,
    lineups: lineupsReducer
});

export default rootReducer;
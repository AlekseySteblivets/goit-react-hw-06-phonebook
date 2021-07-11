import { combineReducers } from "redux";
import types from './phonebooks-types';
// import actions from './phonebooks-actions';
// {
//     contacts: {
//         items: [],
//             filter: ''
//     }
// }


const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [payload, ...state];
        default:
            return state;
    }

};

const filter = (state = '', action) => {
    return state;
}

export default combineReducers({
    items,
    filter
})
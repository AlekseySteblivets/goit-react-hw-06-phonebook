import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebooksReducer from "./phonebooks-reducer";


const rootReducer = combineReducers({
    contacts: phonebooksReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;
// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
// import { composeWithDevTools } from "redux-devtools-extension";
import phonebooksReducer from "./phonebooks-reducer";



const middleware = [...getDefaultMiddleware(), logger]
// const rootReducer = combineReducers({
//     contacts: phonebooksReducer,
// })

// const store = createStore(rootReducer, composeWithDevTools());


const store = configureStore({
    reducer: {
        contacts: phonebooksReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});


export default store;
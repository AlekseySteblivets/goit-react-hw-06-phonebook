// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from "redux-devtools-extension";
import phonebooksReducer from "./phonebooks-reducer";

const persistConfig = {
    key: 'bla-bla',
    storage,
}

const middleware = [...getDefaultMiddleware(), logger]
const rootReducer = combineReducers({
    contacts: phonebooksReducer,
})

// const store = createStore(rootReducer, composeWithDevTools());

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
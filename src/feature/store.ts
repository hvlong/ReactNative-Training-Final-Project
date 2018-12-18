import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// @ts-ignore
import axiosMiddleWare from 'redux-axios-middleware';

import { reducer } from './reducer';
import { persistReducer, persistStore } from 'redux-persist';
import { Api, configApiKey } from './Api';
import { API_KEY } from '../helper/constants';
//@ts-ignore
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

configApiKey(API_KEY);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['favorite']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, axiosMiddleWare(Api)))
);

export const persistor = persistStore(store);

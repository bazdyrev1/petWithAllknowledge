import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';

import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";

import { usersReducer } from "./reducers/usersReducer";
import { postsReducer } from "./reducers/postsReducer";
import { singInReducer } from "./reducers/singInReducer";
import { gitDataReducer } from './reducers/gitDataReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  singIn: singInReducer,
  gitData: gitDataReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger), 
    
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

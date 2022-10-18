import { usersReducer } from "./reducers/usersReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/postsReducer";
import { singInReducer } from "./reducers/singInReducer";
import { gitDataReducer } from './reducers/gitDataReducer'
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
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

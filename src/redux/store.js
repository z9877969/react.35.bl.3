import { configureStore } from "@reduxjs/toolkit";
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
import auth from "./auth/authReducer";
// import { error } from "./error/errorReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["idToken", "refreshToken"], //--допускать в локалторедж
};
export const store = configureStore({
  reducer: {
    // contacts: contactReducer,
    auth: persistReducer(authPersistConfig, auth),
    // error,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV === "development",
});
export const persistor = persistStore(store);

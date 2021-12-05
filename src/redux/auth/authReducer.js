import { createReducer } from "@reduxjs/toolkit";
import {
  getCurUserSuccess,
  loginSuccess,
  logOut,
  refreshTokenSuccess,
  registerSuccess,
} from "./authActions";

const iS = {
  idToken: null,
  email: null,
  refreshToken: null,
  localId: null,
};

const authReducer = createReducer(iS, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [getCurUserSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  [refreshTokenSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  [logOut]: () => iS,
});

export default authReducer;

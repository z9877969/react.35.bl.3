import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSuccess");
export const registerError = createAction("auth/registerError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const getCurUserRequest = createAction("auth/getCurUserRequest");
export const getCurUserSuccess = createAction("auth/getCurUserSuccess");
export const getCurUserError = createAction("auth/getCurUserError");

export const refreshTokenRequest = createAction("auth/refreshTokenRequest");
export const refreshTokenSuccess = createAction("auth/refreshTokenSuccess");
export const refreshTokenError = createAction("auth/refreshTokenError");

export const logOut = createAction("auth/logOut");

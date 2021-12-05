import {
  registerApi,
  loginApi,
  getCurUserApi,
  refreshTokenApi,
} from "../../utils/services/fireBaseApi";
import { errorHandler } from "../error/errorHandler";
import {
  getCurUserError,
  getCurUserRequest,
  getCurUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logOut,
  refreshTokenError,
  refreshTokenRequest,
  refreshTokenSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authActions";

export const register = (userData) => (dispatch) => {
  dispatch(registerRequest());

  registerApi(userData)
    .then((data) => dispatch(registerSuccess(data)))
    .catch((error) => dispatch(registerError(error)));
};

export const login = (userData) => (dispatch) => {
  dispatch(loginRequest());

  loginApi(userData)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((error) => dispatch(loginError(error)));
};

export const getCurUser = (qwe) => (dispatch, getState) => {
  dispatch(getCurUserRequest());

  const { idToken } = getState().auth;

  getCurUserApi(idToken)
    .then((data) => dispatch(getCurUserSuccess(data)))
    .catch((error) =>
      // dispatch(getCurUserError(error))
      dispatch(
        errorHandler({
          error,
          errorAction: getCurUserError,
          cb: getCurUser,
        })
      )
    );
};

export const refreshToken = (cb) => (dispatch, getState) => {
  dispatch(refreshTokenRequest());

  const { refreshToken } = getState().auth;

  refreshTokenApi(refreshToken)
    .then((data) => dispatch(refreshTokenSuccess(data)))
    .then(() => dispatch(cb()))
    .catch(() =>
      // dispatch(refreshTokenError(error))
      dispatch(logOut())
    );
};

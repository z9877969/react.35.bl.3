import axios from "axios";

// ?key=[API_KEY] - r
// https://identitytoolkit.googleapis.com/v1?key=[API_KEY] - l

const API_KEY = "AIzaSyBR_70kDgtC0ivrLOUd_m5kHO3mPg6qEi4";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

const endpoint = {
  LOGIN: "/accounts:signInWithPassword",
  REGISTER: "/accounts:signUp",
  GET_CUR_USER: "/accounts:lookup",
  REFRESH_TOKEN: "/token",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

const setParams = (params) => (axios.defaults.params = params);

// {"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}
// https://identitytoolkit.googleapis.com/v1/?key=[API_KEY]
// https://securetoken.googleapis.com/v1/token?key=[API_KEY]

export const registerApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({ key: API_KEY });
  return axios
    .post(endpoint.REGISTER, {
      returnSecureToken: true,
      ...userData,
    })
    .then(({ data: { idToken, email, refreshToken, localId } }) => ({
      idToken,
      email,
      refreshToken,
      localId,
    }))
    .catch((err) => {
      throw err;
    });
};

export const loginApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({ key: API_KEY });
  return axios
    .post(endpoint.LOGIN, {
      returnSecureToken: true,
      ...userData,
    })
    .then(({ data: { idToken, email, refreshToken, localId } }) => ({
      idToken,
      email,
      refreshToken,
      localId,
    }))
    .catch((err) => {
      throw err;
    });
};

export const getCurUserApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({ key: API_KEY });
  return axios
    .post(endpoint.GET_CUR_USER, { idToken })
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    })
    .catch((err) => {
      throw err;
    });
};

// grant_type=refresh_token&refresh_token=[REFRESH_TOKEN]
export const refreshTokenApi = (refresh_token) => {
  setBaseUrl(baseUrl.REFRESH_TOKEN);
  setParams({ key: API_KEY });
  return axios
    .post(endpoint.REFRESH_TOKEN, {
      grant_type: "refresh_token",
      refresh_token,
    })
    .then(({ data: { id_token: idToken, refresh_token: refreshToken } }) => ({
      idToken,
      refreshToken,
    }))
    .catch((err) => {
      throw err;
    });
};

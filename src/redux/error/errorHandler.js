import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, errorAction, cb }) =>
  (dispatch) => {

    dispatch(errorAction(error.message));

    if (error.request.status === 400) {
      dispatch(refreshToken(cb));
    }
  };

  

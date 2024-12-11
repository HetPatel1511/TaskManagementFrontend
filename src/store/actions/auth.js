import * as actionTypes from "../actionTypes";

export const resetloginWatcher = (payload) => ({
  type: actionTypes.RESET_LOGIN_WATCHER,
  payload,
});

export const loginWatcher = (payload) => ({
  type: actionTypes.LOGIN_WATCHER,
  payload,
});

export const setLoginSuccess = (payload) => ({
  type: actionTypes.SET_LOGIN_SUCCESS,
  payload,
});
export const setLoginSuccessPreferences = (payload) => ({
  type: actionTypes.SET_LOGIN_SUCCESS_PREFERENCES,
  payload,
});

export const setLoginSuccessWelcome = (payload) => ({
  type: actionTypes.SET_LOGIN_SUCCESS_WELCOME,
  payload,
});

export const setSplashScreenAnimation = (payload) => ({
  type: actionTypes.SET_SPLASH_SCREEN_ANIMATION,
  payload,
});

export const setLoginFailure = (payload) => ({
  type: actionTypes.SET_LOGIN_FAILURE,
  payload,
});

export const socialLoginWatcher = (payload) => ({
  type: actionTypes.SOCIAL_LOGIN_WATCHER,
  payload,
});

export const setSocialLoginSuccess = (payload) => ({
  type: actionTypes.SET_SOCIAL_LOGIN_SUCCESS,
  payload,
});

export const setSocialLoginFailure = (payload) => ({
  type: actionTypes.SET_SOCIAL_LOGIN_FAILURE,
  payload,
});
export const setUserDeviceID = (payload) => ({
  type: actionTypes.SET_USER_DEVICE_ID,
  payload,
});
export const sendUserDeviceID = (payload) => ({
  type: actionTypes.SEND_USER_DEVICE_ID,
  payload,
});
export const setFCMToken = (payload) => ({
  type: actionTypes.SET_FCM_TOKEN,
  payload,
});
export const setsharpSportsBettorID = (payload) => ({
  type: actionTypes.SET_SHARPSPORTS_BETTOR_ID,
  payload,
});
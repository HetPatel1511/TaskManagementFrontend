import {createSelector} from 'reselect';

const authSelector = state => state.Auth;

export const getLoginIsLoading = createSelector(
  authSelector,
  auth => auth.login.isLoading,
);

export const getLoginData = createSelector(
  authSelector,
  auth => auth.login.data,
);

export const getLoginError = createSelector(
  authSelector,
  auth => auth.login.error,
);

export const getSplashAnimationStatus = createSelector(
  authSelector,
  auth => auth.SplashAnimation,
);

export const getUserDeviceID = createSelector(
  authSelector,
  auth => auth.UserDeviceID,
);
export const getFCMToken = createSelector(
  authSelector,
  auth => auth.FCMToken,
);
export const getsharpSportsBettorID = createSelector(
  authSelector,
  auth => auth.sharpSportsBettorID,
);
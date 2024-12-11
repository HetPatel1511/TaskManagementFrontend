import * as actionTypes from "../actionTypes";

export const resetupdateRegistrationDetailsWatcher = (payload) => ({
  type: actionTypes.RESET_UPDATE_REGISTRATION_DETAILS_WATCHER,
  payload,
});

export const updateRegistrationDetailsWatcher = (payload) => ({
  type: actionTypes.UPDATE_REGISTRATION_DETAILS_WATCHER,
  payload,
});

export const updateRegistrationDetailsSuccess = (payload) => ({
  type: actionTypes.UPDATE_REGISTRATION_DETAILS_SUCCESS,
  payload,
});

export const updateRegistrationDetailsFailure = (payload) => ({
  type: actionTypes.UPDATE_REGISTRATION_DETAILS_FAILURE,
  payload,
});

export const setRegistrationInformation = (payload) => ({
  type: actionTypes.SET_REGISTRATION_INFORMATION,
  payload,
});

export const resetPasswordDetailsWatcher = (payload) => ({
  type: actionTypes.RESET_PASSWORD_DETAILS_WATCHER,
  payload,
});

export const resetPasswordDetailsSuccess = (payload) => ({
  type: actionTypes.RESET_PASSWORD_DETAILS_SUCCESS,
  payload,
});

export const resetPasswordDetailsFailure = (payload) => ({
  type: actionTypes.RESET_PASSWORD_DETAILS_FAILURE,
  payload,
});

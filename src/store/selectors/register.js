import { createSelector } from "reselect";

const registerSelector = (state) => state.Register;
export const updateRegistrationDetailsIsLoading = createSelector(
  registerSelector,
  (register) => register.register.isLoading
);

export const updateRegistrationDetails = createSelector(
  registerSelector,
  (register) => register.register.data
);

export const updateRegistrationError = createSelector(
  registerSelector,
  (register) => register.register.error
);

export const getRegistrationInformation = createSelector(
  registerSelector,
  (register)  => register.registrationInformation,
);

export const resetPasswordDetailsIsLoading = createSelector(
  registerSelector,
  (register) => register.resetpassword.isLoading
);

export const resetPasswordDetails = createSelector(
  registerSelector,
  (register) => register.resetpassword.data
);

export const resetPasswordError = createSelector(
  registerSelector,
  (register) => register.resetpassword.error
);

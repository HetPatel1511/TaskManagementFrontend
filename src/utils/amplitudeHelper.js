import amplitude from 'amplitude-js';

const ampInstance = amplitude.getInstance();
ampInstance.init("1739749a6cfcaadefec0b411501b546a");

export const SetAmplitudeUserEmail = (userEmail) => {
  if (userEmail) {
    console.log("Email set");
    console.log(userEmail);
    ampInstance.setUserId(userEmail);
  }
};
export const AmplitudeLogEventHandler = ({ type, properties }) => {
  console.log("-=-=-=-type", type);
  console.log("-=-=-=-properties", properties);
  if (type) {
    ampInstance.logEvent(type, properties);
  }
};

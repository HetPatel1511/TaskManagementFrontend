import * as actionTypes from "../actionTypes";
// import AsyncStorage from "@react-native-community/async-storage";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
// import { SetAmplitudeUserEmail,amplitudeLogEventHandler,registerAppsFlyerEvent } from "../../utils/amplitudeHelper";
import message from "../../utils/message";
import localStorage from "redux-persist/es/storage";

const initialState = {
  register: {
    isLoading: false,
    data: [],
    error: null,
  },
  resetpassword: {
    isLoading: false,
    data: [],
    error: null,
  },
  registrationInformation: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_UPDATE_REGISTRATION_DETAILS_WATCHER:
      return initialState;
    case actionTypes.UPDATE_REGISTRATION_DETAILS_WATCHER:
      return {
        ...state,
        register: {
          isLoading: true,
          data: [],
          error: null,
        },
      };
    case actionTypes.UPDATE_REGISTRATION_DETAILS_SUCCESS:
      try {
        localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      } catch (e) {
        // save error
        // console.log("errr0rrr ===> ", e);
      }
      // if(action.payload?.user_profile) {
      //   SetAmplitudeUserEmail(action.payload?.user_profile?.email);
      //   registerAppsFlyerEvent(action.payload?.user_profile?.email);
      //   // amplitudeLogEventHandler({type:message.AccountCreatedmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
      //   if(action.payload?.user_profile?.utm_source) {
      //     const tmp_source = {
      //       "utm_source": action.payload?.user_profile?.utm_source?.utm_source,
      //       "utm_medium": action.payload?.user_profile?.utm_source?.utm_medium,
      //       "utm_campaign": action.payload?.user_profile?.utm_source?.utm_campaign,
      //       "utm_id": action.payload?.user_profile?.utm_source?.utm_id,
      //       "utm_term": action.payload?.user_profile?.utm_source?.utm_term,
      //       "utm_content": action.payload?.user_profile?.utm_source?.utm_content
      //     }
      //     amplitudeLogEventHandler({type:message.AccountCreatedmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()},userProperties:tmp_source});
      //   } else {
      //     amplitudeLogEventHandler({type:message.AccountCreatedmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
      //   }
      // }

      return {
        ...state,
        registrationInformation: [],
      };
    case actionTypes.SET_REGISTRATION_INFORMATION:
      return {
        ...state,
        registrationInformation: {
          ...state.registrationInformation,
          ...action.payload,
        },
      };
    case actionTypes.UPDATE_REGISTRATION_DETAILS_FAILURE:
      return {
        ...state,
        register: {
          isLoading: false,
          data: [],
          error: action.payload,
        },
      };
      case actionTypes.RESET_PASSWORD_DETAILS_WATCHER:
      return {
        ...state,
        resetpassword: {
          isLoading: true,
          data: [],
          error: null,
        },
      };
    case actionTypes.RESET_PASSWORD_DETAILS_SUCCESS:
      return {
        ...state,
        resetpassword: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };

    case actionTypes.RESET_PASSWORD_DETAILS_FAILURE:
      return {
        ...state,
        resetpassword: {
          isLoading: false,
          data: [],
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

import * as actionTypes from "../actionTypes";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../utils/constants";
import message from "../../utils/message";
import localStorage from "redux-persist/es/storage";

const initialState = {
  token: null,
  login: {
    isLoading: false,
    data: null,
    error: null,
  },
  SplashAnimation: false,
  // UserDeviceID: '',
  // FCMToken: '',
  // sharpSportsBettorID: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_LOGIN_WATCHER:
      return initialState;
    case actionTypes.LOGIN_WATCHER:
      return {
        ...state,
        login: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case actionTypes.SET_LOGIN_SUCCESS:
      console.log('SET_LOGIN_SUCCESSa')
      if (action.payload) {
        try {
          localStorage.setItem(ACCESS_TOKEN, action.payload.token);
        } catch (e) {
          // save error
          // console.log("errr0rrr ===> ", e);
        }
        // amplitudeLogEventHandler({type:message.LoggedInmsg, properties:{"Account Type": action.payload?.user_profile?.login_type}});
      }
      return {
        ...state,
        login: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
        sharpSportsBettorID: action.payload?.user_profile?.sharpSportsBettorID
      };
    case actionTypes.SET_LOGIN_SUCCESS_PREFERENCES:
      return {
        ...state,
        login: {
          ...state.login,
          data: {
            ...state.login.data,
            user_profile: {
              ...state.login.data.user_profile,
              set_preferences:1
            }
          },
          
        },
      };
    case actionTypes.SET_LOGIN_SUCCESS_WELCOME:
      return {
        ...state,
        login: {
          ...state.login,
          data: {
            ...state.login.data,
            user_profile: {
              ...state.login.data.user_profile,
              set_welcome_popup:1
            }
          },
          
        },
      };

    case actionTypes.SET_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    case actionTypes.SOCIAL_LOGIN_WATCHER:
      return {
        ...state,
        login: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case actionTypes.SET_SOCIAL_LOGIN_SUCCESS:
      if (action.payload) {
        try {
          localStorage.setItem(ACCESS_TOKEN, action.payload.token);
        } catch (e) {
          // save error
          // console.log("errr0rrr ===> ", e);
        }
        // SetAmplitudeUserEmail(action.payload?.user_profile?.email);
        // if(action.payload?.user_profile) {
        //   SetAmplitudeUserEmail(action.payload?.user_profile?.email);
        //   // amplitudeLogEventHandler({type:message.AccountCreatedmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
        //   if(action.payload?.user_profile?.utm_source?.utm_source) {
        //     const tmp_source = {
        //       "utm_source": action.payload?.user_profile?.utm_source?.utm_source,
        //       "utm_medium": action.payload?.user_profile?.utm_source?.utm_medium,
        //       "utm_campaign": action.payload?.user_profile?.utm_source?.utm_campaign,
        //       "utm_id": action.payload?.user_profile?.utm_source?.utm_id,
        //       "utm_term": action.payload?.user_profile?.utm_source?.utm_term,
        //       "utm_content": action.payload?.user_profile?.utm_source?.utm_content
        //     }
        //     if(action.payload?.user_profile?.is_new_user) { 
        //       console.log('1')
        //       amplitudeLogEventHandler({type:message.AccountCreatedmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}, userProperties:tmp_source});
        //       amplitudeLogEventHandler({type:message.LoggedInmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
        //       registerAppsFlyerEvent(action.payload?.user_profile?.email);
        //     } else {
        //       console.log('2')
        //       amplitudeLogEventHandler({type:message.LoggedInmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
        //     }
        //   } else {
        //     if(action.payload?.user_profile?.is_new_user) { 
        //       console.log('3')
        //       amplitudeLogEventHandler({type:message.AccountCreatedmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
        //       amplitudeLogEventHandler({type:message.LoggedInmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
        //       registerAppsFlyerEvent(action.payload?.user_profile?.email);
        //     } else {
        //       console.log('4')
        //       amplitudeLogEventHandler({type:message.LoggedInmsg, properties:{"Account Type": action.payload?.user_profile?.login_type.toLowerCase()}});
        //     }
        //   }
        // }

      }
      return {
        ...state,
        login: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
        sharpSportsBettorID: action.payload?.user_profile?.sharpSportsBettorID
      };

    case actionTypes.SET_SOCIAL_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
      
    case actionTypes.SET_SPLASH_SCREEN_ANIMATION:
      return {
        ...state,
        SplashAnimation: action.payload,
      };
    case actionTypes.SET_USER_DEVICE_ID:
      return {
        ...state,
        UserDeviceID: action.payload,
      };
    case actionTypes.SET_FCM_TOKEN:
      return {
        ...state,
        FCMToken: action.payload,
      };
    case actionTypes.SET_SHARPSPORTS_BETTOR_ID:
      return {
        ...state,
        sharpSportsBettorID: action.payload,
      };
    default:
      return state;
  }
};

import axios from "axios";
// import { DeviceEventEmitter } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";
import { API_URL, BASE_URL } from "./config";
import {
  ApiResponseStatus,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  Event,
} from "../utils/constants";
import message from "../utils/message";
// import { getServerDownDetailsHelper,  isInternetConnected } from "../utils/helpers";
import localStorage from "redux-persist/es/storage";

// const platform = Platform.OS;
const version = "1.0.7";

const getLocalAccessToken = async () => {
  const accessToken = await localStorage.getItem(ACCESS_TOKEN);
  return accessToken;
};
const getLocalRefreshToken = async () => {
  const refreshToken = await localStorage.getItem(REFRESH_TOKEN);
  return refreshToken;
};

const instance = axios.create({
  baseURI: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
  },
  withCredentials: true,
});

function sendErrorMessageEvent(message) {
  console.log("sendErrorMessageEvent ", message);
  // DeviceEventEmitter.emit(Event.SHOW_ERROR_TOAST, {
  //   message,
  // });
}
function sendWarningMessageEvent(message) {
  console.log("sendErrorMessageEvent ", message);
  // DeviceEventEmitter.emit(Event.SHOW_WARNING_TOAST, {
  //   message,
  // });
}

// const sendMessageToSlack = (message) => {
//   // NetInfo.fetch().then(state => {
//   //   const SlackObj = new Slack("https://hooks.slack.com/services/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");
//   //   const net_status = "IP Address :- "+state?.details?.ipAddress+"\nIs Connection Expensive :- "+state?.details?.isConnectionExpensive+"\nSubnet :- "+state?.details?.subnet+"\nIs Connnected :- "+state?.isConnected+"\nIs Internet Reachable :- "+state?.isInternetReachable+"\nType :- "+state?.type;
//   //   const details = message + net_status;
//   //   const res = SlackObj.post(details,"#mobile-app");
//   // });
// }

/**
 * Request interceptor
 * Add Authorization header if it exists
 * This configuration applies for all requests
 */
instance.interceptors.request.use(
  async (reqConfig) => {
    // const isInternet = await isInternetConnected();
    // console.log('isInternet')
    // console.log(isInternet)
    // if (!isInternet) {
    //   sendErrorMessageEvent(message.InternetNotAvailable);
    //   return Promise.reject({
    //       downerror:
    //       {
    //         status: 111,
    //         message: message.InternetNotAvailable,
    //       },
    //   });
    // }
    // const getServerDownDetailsHel = await getServerDownDetailsHelper();

    // if (!getServerDownDetailsHel) {
    //   return Promise.reject({
    //     downerror:
    //     {
    //       status: 222,
    //       message: message.ServerDownmsg,
    //     },
    //   });
    // } else {
    //   // // sendErrorMessageEvent(message.GeneralCrashMessage);
    // }

    if (reqConfig.url !== `${BASE_URL}${API_URL.REFRESH_TOKEN}`) {
      let accessToken = await getLocalAccessToken();
      if (reqConfig.url == `${API_URL.GET_SERVER_DOWN_DETAILS}`) {
        reqConfig.headers = {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
        };
      } else {
        if (accessToken) {
          reqConfig.headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
          };
        }
      }
      if (reqConfig.url == `${BASE_URL}${API_URL.REFRESH_BETSLIPS}`) {
        reqConfig.timeout = 120000;
      }
      if (reqConfig?.data?.manually_refresh == "yes") {
        reqConfig.timeout = 60000;
      }
    }
    console.log("Req", reqConfig);
    return reqConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Catch basic errors like 401 and redirect to login
 * This configuration applies for all responses
 */
instance.interceptors.response.use(
  async (response) => {
    // const isInternet = await isInternetConnected();
    // console.log('isInternet')
    // console.log(isInternet)
    // if (!isInternet) {
    //   sendErrorMessageEvent(message.InternetNotAvailable);
    //   return Promise.reject({
    //       downerror:
    //       {
    //         status: 111,
    //         message: message.InternetNotAvailable,
    //       },
    //   });
    // } else {
    // const getServerDownDetailsHel = await getServerDownDetailsHelper();

    //   if (!getServerDownDetailsHel) {
    //     return Promise.reject({
    //       downerror:
    //       {
    //         status: 222,
    //         message: message.ServerDownmsg,
    //       },
    //     });
    //   } else {
    //     // sendErrorMessageEvent(message.GeneralCrashMessage);
    //   }

    console.log("req response", response);
    if (response.status === ApiResponseStatus.SUCCESS) {
      return response.data;
    }
    return Promise.reject({
      message: message.SomethingWentWrong,
    });
    // }
  },
  async (error) => {
    console.log("req error ", error.response);
    // Do something with response error
    // if (typeof error === 'undefined') {
    //   // request cancelled
    //   // when backend server is not available at all

    //   let serverError = {
    //     data: {
    //       message: Messages.serverError,
    //     },
    //   };
    //   showSnackBar(Messages.serverError);
    //   return Promise.reject(serverError);
    // } else if (typeof error.response === 'undefined') {
    //   // when request is timeout
    //   let serverError = {
    //     data: {
    //       message: Messages.serverError,
    //     },
    //   };
    //   showSnackBar(Messages.serverError);
    //   return Promise.reject(serverError);
    // } else if (error.response.status === 401) {
    //   // apply refresh token logic here instead of redirecting to login
    //   //localStorage.clear();
    //   //sessionStorage.clear();

    //   if (error.response.data.meta)
    //     showSnackBar(error.response.data.meta.message);
    // } else if (error.response.status === 111) {
    //   // internet not connected

    //   showSnackBar(error.response.message);
    // } else {
    //   if (error.response.data.meta)
    //     showSnackBar(error.response.data.meta.message);
    // }
    // const isInternet = await isInternetConnected();
    // console.log('isInternet')
    // console.log(isInternet)
    // if (!isInternet) {
    //   sendErrorMessageEvent(message.InternetNotAvailable);
    //   return Promise.reject({
    //       downerror:
    //       {
    //         status: 111,
    //         message: message.InternetNotAvailable,
    //       },
    //   });
    // }
    // const getServerDownDetailsHel = await getServerDownDetailsHelper();

    // if (!getServerDownDetailsHel) {
    //   return Promise.reject({
    //       downerror:
    //       {
    //         status: 222,
    //         message: message.ServerDownmsg,
    //       },
    //     });
    // } else {
    //   // sendErrorMessageEvent(message.GeneralCrashMessage);
    // }

    if (error.response) {
      // Access Token was expired
      if (
        error.response.status === ApiResponseStatus.UNAUTHORIZED &&
        error.config.url !== `${BASE_URL}${API_URL.LOGIN}`
      ) {
        console.log("-=-=-=-=-=-=-=Unauthorised");
        localStorage.setItem(ACCESS_TOKEN, "");
        localStorage.setItem(REFRESH_TOKEN, "");

        // if (error.response.status === ApiResponseStatus.UNAUTHORIZED) {
        //   return Promise.reject({
        //     unauthorized: true,
        //   });
        // } else {
        //   try {
        //     const rs = await refreshToken();
        //     if (rs.data) {
        //       const { access_token, refresh_token } = rs.data;
        //       await localStorage.setItem(ACCESS_TOKEN, access_token);
        //       await localStorage.setItem(REFRESH_TOKEN, refresh_token);
        //       return instance(error.config);
        //     } else {
        //       // DeviceEventEmitter.emit(Event.SESSION_EXPIRED);
        //       return Promise.reject({
        //         message: message.SomethingWentWrong,
        //       });
        //     }
        //   } catch (_error) {
        //     if (_error.response) {
        //       return Promise.reject(error.response);
        //     }
        //     return Promise.reject(_error);
        //   }
        // }
        try {
          console.log("Trying to refresh token");

          const rs = await refreshToken();
          if (rs.data) {
            console.log("refresh token API data: ", rs.data);
            const { accessToken: access_token, refreshToken: refresh_token } =
              rs.data;
            await localStorage.setItem(ACCESS_TOKEN, access_token);
            await localStorage.setItem(REFRESH_TOKEN, refresh_token);
            return instance(error.config);
          } else {
            console.log("something went wrong while refreshing token");
            return Promise.reject({
              unauthorized: true,
            });
          }
        } catch (_error) {
          if (_error.response) {
            return Promise.reject(error.response);
          }
          return Promise.reject(_error);
        }
      } else {
        if (error.response.status === ApiResponseStatus.ERROR500) {
          if (error.response.config.url.includes("PicksData")) {
            console.log("ERROR500");
            return Promise.reject({
              message: message.PicksDataError,
            });
          } else {
            console.log("GeneralCrash");
            //sendErrorMessageEvent(message.GeneralCrashMessage);

            return Promise.reject({
              message: message.GeneralCrashMessage,
            });
          }
        } else {
          //sendErrorMessageEvent(message.SomethingWentWrong);
          return Promise.reject({
            message: message.SomethingWentWrong,
          });
        }
      }
    } else {
      if (error.name == "AxiosError") {
        console.log("Unstable internet connection----------------------");
        sendWarningMessageEvent(message.ApiConnectionTimeout);
        // sendMessageToSlack("API Timeout Error\nURL :- "+error.config.url.split('?')[0]+"\nPlatform :- "+platform+"\nVersion :- "+version+"\n");
        return Promise.reject({
          message: message.ApiConnectionTimeout,
        });
      } else {
        // sendMessageToSlack("URL :- "+error.config.url.split('?')[0]+"\nPlatform :- "+platform+"\nVersion :- "+version+"\n");
        //sendErrorMessageEvent(message.SomethingWentWrong);
        return Promise.reject({
          message: message.SomethingWentWrong,
        });
      }
    }
  }
);

const refreshToken = async () => {
  const refresh_token = await getLocalRefreshToken();
  return instance.post(`${BASE_URL}${API_URL.REFRESH_TOKEN}`);
};

export default instance;

import * as moment from "moment";
import "moment-timezone";

export const isInternetConnected = async () => {
  return true;
};

export const DateFormat = (date) => {

  moment.tz.setDefault("US/Eastern");
  var CurrentDate = moment();
  var toTime = moment(date).from(CurrentDate);
  if (toTime === "a day ago") {
    return "1 day ago";
  }
  if (toTime === "an hour ago") {
    return "1 hour ago";
  }
  if (toTime === "a year ago") {
    return "1 year ago";
  }
  return toTime;
  
};

export const hashCode = (str) => {
  var hash = 0, i = 0, len = str.length;
  while ( i < len ) {
      hash  = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
  }
  return hash ? hash.toString() : str;
};
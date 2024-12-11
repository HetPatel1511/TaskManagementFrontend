export const SITE_BASE_URL = "http://localhost:3001";
export const BASE_URL = SITE_BASE_URL;
var date = new Date();
// export const BASE_URL = "http://digen.app.sportsgrid.com/api/v1";
// import VersionInfo from "react-native-version-info";
// import { Platform } from "react-native";
// VersionInfo = "1.0.7"
// var offsetInHours = date.getTimezoneOffset() * 60;
// var offsetInHoursString = "&timezone="+(-offsetInHours);
// const platform = "&platform="+Platform?.constants?.systemName;
// const version = "?v="+VersionInfo+platform+offsetInHoursString;
// const live_server_status = "https://s3.amazonaws.com/media.sportsgrid.com/app_sg_server_status.json";
// const dev_server_status = "https://s3.amazonaws.com/media.sportsgrid.com/dev_app_sg_server_status.json";
export const API_URL = {
  LOGIN: "/user/login",
  REGISTRATION: "/user/register",
  // PROJECT
  GET_PROJECT_DETAILS: "/user/projects",
  CREATE_PROJECT: "/project",
  // TASK
  GET_TASK_DETAILS: "/project/getTasks",
  CREATE_TASK: "/task",


  
  REFRESH_TOKEN: "/user/refresh-token",

  SOCIAL_LOGIN: "/login/social",
  GET_FEED_DETAILS: "/get_feed",
  GET_SPORTS_DETAILS: "/getSports",
  GET_TEAMS_DETAILS: "/getTeams",
  GET_HOSTS_DETAILS: "/getTalents",
  DELETE_ACCOUNT: "/deleteAccount",
  GET_PREFERENCES_DETAILS: "/preferences/get",
  UPDATE_PREFERENCES_DETAILS: "/preferences/add",
  GET_SETTINGS_DETAILS: "/settings/get",
  GET_STANDINGS_DETAILS: "/standing",
  UPDATE_SETTINGS_DETAILS: "/settings/add",
  GET_BOOKMAKER_DETAILS: "/getAllSportsBook",
  GET_SINGLE_SPORT_DETAILS: "/getSportData",
  GET_SINGLE_TEAM_DETAILS: "/getTeamData",
  GET_SINGLE_HOST_DETAILS: "/getTalentData",
  GET_SINGLE_VIDEO_DETAILS: "/getVideoData",
  GET_SINGLE_ARTICLE_DETAILS: "/getArticleData",
  GET_MORE_ARTICLES: "/getLoadMoreData",
  GET_GAMES_DETAILS: "/getGamesData",
  GET_SINGLE_GAME_PREVIEW_DETAILS:"/getSingleGamePreviewData",
  GET_SINGLE_GAME_GAME_LOG:"/getExpandGameLog",
  GET_SINGLE_GAME_STAT_DETAILS:"/getSingleGameStatData",
  GET_SINGLE_GAME_RESULT_DETAILS:"/getSingleGameResultData",
  GET_SINGLE_SPORT_GAMES_DETAILS:"/getSingleSportGamesData",
  GET_WATCH_DETAILS:"/getWatchData",
  GET_RADIO_DETAILS:"/getRadioData",
  GET_GAME_PICKS_DETAILS:"/getGamePicksData",
  GET_PROP_PICKS_DETAILS:"/getPropPicksData",
  RESET_PASSWORD:"/reset_password",
  GET_ALL_SPORT_GAME_PICKS_DATA:"/v2/getAllSportGamePicksData",
  GET_ALL_SPORT_PROP_PICKS_DATA:"/v2/getAllSportPropPicksData",
  GET_SINGLE_SPORT_GAME_PICKS_DATA:"/v2/getSingleSportGamePicksData",
  GET_SINGLE_SPORT_PROP_PICKS_DATA:"/v2/getSingleSportPropPicksData",
  GET_PLAYER_CARD_DATA:"/playerCard",
  GET_SPORTBOOK_DETAILS:"/sharpSport/sportbookNameImage",
  GET_MY_BETS_DETAILS:"/sharpSport/getMyBetsData",
  GET_SINGLE_SPORT_BETS_DETAILS:"/sharpSport/getBetDetails",
  GET_SHARPSPORT_REMOVE_ACCOUNT:"/sharpSport/removeBetterAccount",
  REFRESH_BETSLIPS:"/sharpSport/refreshBetSlips",
  GET_PARLAY_DETAILS:"/sharpSport/getParlayData",
  GET_SHORTS_DETAILS:"/getShorts",
  GET_ALL_SPORT_GAME_TRENDS_DATA:"/getAllSportGameTrendsData",
  GET_ALL_SPORT_PLAYER_TRENDS_DATA:"/getAllSportPlayerTrendsData",
  GET_SINGLE_SPORT_GAME_TRENDS_DATA:"/getSingleSportGameTrendsData",
  GET_SINGLE_SPORT_PLAYER_TRENDS_DATA:"/getSingleSportPlayerTrendsData",
  SEND_USER_DEVICE_ID:"/device_info",
  SET_ANDROID_BETSYNC_AMPLITUDE:"/sharpSport/androidBetSyncEmplitude",
  GET_SINGLE_RADIO_DETAILS:"/getSingleRadioData",
  GET_TEAM_SCHEDULES_DETAILS:"/getTeamSchedule",
  GET_TEAM_ROSTERS_DETAILS:"/getTeamPlayerRoster",
  GET_SGP_CONTENT_DETAILS:"/getSgpContent",
  GET_ALL_SPORTS_SGP_CONTENT_DETAILS:"/getSportBySgpContent",
  GET_SINGLE_SPORT_SGP_CONTENT_DETAILS:"/getSingleSportSgpContent",
  GET_MORE_SGP_CONTENT_DETAILS:"/getLoadMoreSgpData",
  GET_SHOW_VIDEO_DETAILS:"/getSingleVideoData",
  GET_ALL_SPORT_HOST_PICKS_DATA:"/getHostPicksContent",
  GET_MORE_HOST_PICKS_DETAILS:"/getLoadHostPicksContent",
  GET_SINGLE_SPORT_HOST_PICKS_DATA:"/getSingleSportHostPicksContent",
  GET_SEARCH_DATA:"/getSearchData",
  GET_SINGLE_SHOW_DETAILS:"/get_single_show",
  GET_SINGLE_LEAGUE_DETAILS:"/get_single_league_profile",
  GET_SINGLE_PODCAST_DETAILS:"/get_single_podcast",
};

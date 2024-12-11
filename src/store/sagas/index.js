import { all } from "redux-saga/effects";
import { loginWatcher, socialLoginWatcher,sendUserDeviceID } from "./auth";
import { fetchUserDetailsActionWatcher } from "./user";
import { updateRegistrationDetailsActionWatcher, resetPasswordDetailsActionWatcher } from "./register";
import {
  fetchSingleArticleDetailsActionWatcher,
} from "./singlearticle";
import {
  fetchFeedDetailsActionWatcher,
} from "./feed";
import {
  fetchSingleShowDetailsActionWatcher
} from "./show"
import {
  fetchSingleLeagueDetailsActionWatcher
} from "./singleleague"
import {
  fetchSinglePodcastDetailsActionWatcher
} from "./singlepodcast";
import { createProjectActionWatcher, fetchProjectDetailsActionWatcher } from "./project";
import { createTaskActionWatcher, fetchTaskDetailsActionWatcher } from "./task";

export default function* rootSaga() {
  yield all([
    loginWatcher(),
    fetchProjectDetailsActionWatcher(),
    createProjectActionWatcher(),
    fetchTaskDetailsActionWatcher(),
    createTaskActionWatcher(),


    
    fetchFeedDetailsActionWatcher(),
    fetchUserDetailsActionWatcher(),
    updateRegistrationDetailsActionWatcher(),
    socialLoginWatcher(),
    sendUserDeviceID(),
    resetPasswordDetailsActionWatcher(),
    fetchSingleShowDetailsActionWatcher(),
    fetchSingleLeagueDetailsActionWatcher(),
    fetchSinglePodcastDetailsActionWatcher(), 
  ]);
}

import { combineReducers } from "redux";
import Auth from "./auth";
import User from "./user";
import Register from "./register";
import SingleArticle from "./singlearticle";
import Feed from "./feed";
import Show from "./show";
import SingleLeague from "./singleleague";
import SinglePodcast from "./singlepodcast";
import Project from "./project";
import Task from "./task";

export default combineReducers({
  Auth,
  User,
  Feed,
  Register,
  SingleArticle,
  Show,
  SingleLeague,
  SinglePodcast,
  Project,
  Task
});

import { connect } from "react-redux";
// import { getFeedDetailsIsLoading, resetfetchFeedDetailsWatcher } from "../../store/reducers/auth";
import CreateProject from "./view";
import {
  createProjectRequest,
  resetCreateProjectRequest,
} from "../../store/actions";
import {
  getCreateProjectDetails,
  getCreateProjectError,
  getCreateProjectIsLoading,
} from "../../store/selectors/project";

const mapStateToProps = (state) => {
  console.log(state);

  return {
    isLoading: getCreateProjectIsLoading(state),
    createProjectData: getCreateProjectDetails(state),
    createProjectError: getCreateProjectError(state),
  };
};

const mapDispatchToProps = {
  resetCreateProjectRequest,
  createProjectRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

import { connect } from "react-redux";
import { fetchProjectDetailsWatcher, loginWatcher } from "../../store/actions";
import Home from "./view";
import { getProjectDetails, getProjectDetailsIsLoading, getProjectError, getProjectKeyDataset } from "../../store/selectors";

const mapStateToProps = (state) => {
    return {
        // isLoading: getFeedDetailsIsLoading(state),
        isLoading: getProjectDetailsIsLoading(state),
        projectData: getProjectDetails(state),
        projectError: getProjectError(state),
    };
};

const mapDispatchToProps = {
    // resetfetchFeedDetailsWatcher,
    // loginWatcher,
    fetchProjectDetailsWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

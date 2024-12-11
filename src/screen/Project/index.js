import { connect } from "react-redux";
import { fetchTaskDetailsWatcher, loginWatcher, resetFetchTaskDetailsWatcher, setTaskDetailsFailure, setTaskDetailsSuccess } from "../../store/actions";
import Project from "./view";
import { getTaskDetails, getTaskDetailsIsLoading, getTaskError } from "../../store/selectors/task";

const mapStateToProps = (state) => {
    return {
        taskIsLoading: getTaskDetailsIsLoading(state),
        taskData: getTaskDetails(state),
        taskError: getTaskError(state),
    };
};

const mapDispatchToProps = {
    // resetfetchFeedDetailsWatcher,
    resetFetchTaskDetailsWatcher,
    fetchTaskDetailsWatcher,
    setTaskDetailsSuccess,
    setTaskDetailsFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);

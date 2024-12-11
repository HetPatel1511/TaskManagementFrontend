import { connect } from "react-redux";
// import { getFeedDetailsIsLoading, resetfetchFeedDetailsWatcher } from "../../store/reducers/auth";
import CreateTask from "./view";

const mapStateToProps = (state) => {
    return {
        // isLoading: getFeedDetailsIsLoading(state),
    };
};

const mapDispatchToProps = {
    // resetfetchFeedDetailsWatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);

import { connect } from "react-redux";
// import { getFeedDetailsIsLoading, resetfetchFeedDetailsWatcher } from "../../store/reducers/auth";
import Register from "./view";
import { updateRegistrationDetailsWatcher } from "../../store/actions";

const mapStateToProps = (state) => {
    return {
        // isLoading: getFeedDetailsIsLoading(state),
    };
};

const mapDispatchToProps = {
    // resetfetchFeedDetailsWatcher,
    updateRegistrationDetailsWatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

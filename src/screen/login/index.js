import { connect } from "react-redux";
// import { getFeedDetailsIsLoading, resetfetchFeedDetailsWatcher } from "../../store/reducers/auth";
import Login from "./view";
import { loginWatcher } from "../../store/actions";

const mapStateToProps = (state) => {
    return {
        // isLoading: getFeedDetailsIsLoading(state),
    };
};

const mapDispatchToProps = {
    // resetfetchFeedDetailsWatcher,
    loginWatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

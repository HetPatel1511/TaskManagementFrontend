import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { getLoginData } from "../../store/selectors/auth";

const mapStateToProps = (state) => {
    console.log(state);
    return {
      loginData: getLoginData(state),
    };
};

const mapDispatchToProps = {
    // resetfetchFeedDetailsWatcher,
    // loginWatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);

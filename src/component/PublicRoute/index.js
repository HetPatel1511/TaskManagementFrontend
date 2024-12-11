import { connect } from "react-redux";
import PublicRoute from "./PublicRoute";
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

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);

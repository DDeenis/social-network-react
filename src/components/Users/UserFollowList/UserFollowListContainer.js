import { connect } from "react-redux";
import UserFollowList from "./UserFollowList";

function mapStateToProps(state) {
    return {
        people: state.users.people
    };
}

function mapDispatchToProps(dispatch) {
    return {
        followUser: () => {
            // DISPATCH ACTION!!!
            dispatch();
        }
    };
}

const UserFollowListContainer = connect(mapStateToProps, mapDispatchToProps)(UserFollowList);

export default UserFollowListContainer;
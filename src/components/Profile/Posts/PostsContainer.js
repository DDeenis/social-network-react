import { connect } from 'react-redux';
import { createPostCreator, inputPostTextCreator } from '../../../redux/actionCreators';
import Posts from '../Posts/Posts';

const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    postInput: state.profile.postInput
});

const mapDispatchToProps = (dispatch) => ({
    createPost: () => {
        dispatch(
            createPostCreator()
        );
    },
    inputPostText: (e) => {
        dispatch(
            inputPostTextCreator(e.target.value)
        );
    }
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
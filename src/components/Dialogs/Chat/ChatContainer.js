import { connect } from 'react-redux';
import { createMessageCreator, inputMessageTextCreator } from '../../../redux/actionCreators';
import Chat from './Chat';

const mapStateToProps = (state) => ({
    messages: state.chat.messages,
    messageInput: state.chat.messageInput
});

const mapDispatchToProps = (dispatch) => ({
    createMessage: () => {
        dispatch(
            createMessageCreator()
        )
    },
    changeInput: (e) => {
        dispatch(
            inputMessageTextCreator(e.target.value)
        )
    }
});

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
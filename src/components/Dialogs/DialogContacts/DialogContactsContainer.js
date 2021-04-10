import { connect } from "react-redux";
import DialogContacts from "./DialogContacts";

const mapStateToProps = (state) => ({
    people: state.chat.people
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({})

const DialogContactsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogContacts);

export default DialogContactsContainer;
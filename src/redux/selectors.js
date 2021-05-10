import { createSelector } from "reselect";

// ptofile
export const profileSelector = createSelector(state => state.profile, profile => profile);
export const watchedProfileSelector = createSelector(state => state.profile, profile => profile.watchedProfile);
export const userStatusSelector = createSelector(state => state.profile, profile => profile.userStatus);
export const postsSelector = createSelector(state => state.profile, profile => profile.posts);

// login
export const userIdSelector = createSelector(state => state.login, login => login.userId);
export const isAuthSelector = createSelector(state => state.login, login => login.isAuth);
export const loginSelector = createSelector(state => state.login, login => login.login);

// users
export const usersSelector = createSelector(state => state.users, users => users);

// sidebar
export const peopleOnlineSelector = createSelector(state => state.sidebar, sidebar => sidebar.people);

// chat
export const messagesSelector = createSelector(state => state.chat, chat => chat.messages);

// app
export const isLoadingSelector = createSelector(state => state.app, app => app.isLoading);

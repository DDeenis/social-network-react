import { createSelector } from "reselect";

// ptofile
export const profileSelector = createSelector(state => state.profile, profile => profile);
export const watchedProfileSelector = createSelector(state => state.profile.watchedProfile, watchedProfile => watchedProfile);
export const userStatusSelector = createSelector(state => state.profile.userStatus, userStatus => userStatus);
export const postsSelector = createSelector(state => state.profile.posts, posts => posts);

// login
export const userIdSelector = createSelector(state => state.login.userId, userId => userId);
export const isAuthSelector = createSelector(state => state.login.isAuth, isAuth => isAuth);
export const loginSelector = createSelector(state => state.login.login, login => login);

// users
export const usersSelector = createSelector(state => state.users, users => users);
export const peopleSelector = createSelector(usersSelector, users => users.people);
export const followedUsersSelector = createSelector(peopleSelector, users => users.filter(u => u.followed));
export const unfollowedUsersSelector = createSelector(peopleSelector, users => users.filter(u => !u.followed));

// sidebar
export const peopleOnlineSelector = createSelector(state => state.sidebar.people, people => people);

// chat
export const messagesSelector = createSelector(state => state.chat.messages, messages => messages);

// app
export const isLoadingSelector = createSelector(state => state.app.isLoading, isLoading => isLoading);

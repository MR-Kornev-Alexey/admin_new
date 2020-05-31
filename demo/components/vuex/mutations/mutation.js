export default {
  ADD_USERS_TO_STATE: (state, users) => {
    state.users.push(users)
  },
  SET_USERS_TO_STATE: (state, users) => {
    state.users = users
  }
}

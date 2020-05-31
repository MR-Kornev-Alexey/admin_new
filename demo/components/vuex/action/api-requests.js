import axios from 'axios'

export default {
  CREATE_USER_TO_API: ({ commit }, data) => {
    return axios.post('http://localhost:3000/users', data)
      .then(resp => {
        commit('ADD_USERS_TO_STATE', resp.data)
        console.log(resp.data)
      }).catch(error => {
        console.log(error)
      })
  },

  GET_USERS_FROM_API ({ commit }) {
    return axios('http://localhost:3000/users', {
      method: 'GET'
    })
      .then((response) => {
        commit('SET_USERS_TO_STATE', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }
}

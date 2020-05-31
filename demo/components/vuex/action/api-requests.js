import axios from 'axios'

export default {
  CREATE_USER_TO_API ({ commit }) {
    return axios('http://localhost:3000/users', {
      method: 'POST',
      data: {
        number: 36,
        id: 6764890,
        name: 'Dimon',
        family: 'Pupkin',
        company: 'Command',
        email: 'Dima@ffff.ru',
        phone: 9688050868,
        avatar: '1.jpg',
        login: 'alex_user',
        password: '967bg87g65',
        balance: 100,
        time_create: '2010-04-30'
      }
    }
    ).then(resp => {
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
  },
  GET_PRODUCTS_FROM_API ({ commit }) {
    return axios('http://localhost:3000/products', {
      method: 'GET'
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }
}

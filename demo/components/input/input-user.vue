<template>
  <div class="input-user">
    <h2>Ввод нового пользователя</h2>
    <div class="input-user__form">
      <form
        id="app"
        method="post"
        @submit.prevent="addUser()"
      >
        <b-form-input
          id="name"
          v-model="post.name"
          placeholder="Введите имя"
        />
        <div class="mt-2">
          <small>Введите имя </small>
        </div>
        <b-form-input
          v-model="post.surname"
          placeholder="Введите фамилию"
        />
        <div class="mt-2">
          <small>Введите Фамилию </small>
        </div>
        <b-form-input
          v-model="post.login"
          placeholder="Введите логин"
        />
        <div class="mt-2">
          <small>Вводите только латиницей </small>
        </div>
        <div>
          <button
            type="submit"
            class="btn-new"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'InputUser',
  data: function () {
    return {
      post: {
        name: '',
        surname: '',
        login: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'CREATE_USER_TO_API'
    ]),
    addUser () {
      let postInStore = {
        number: 39,
        id: 67540091111,
        name: '',
        family: '',
        company: 'MMM',
        email: 'kima@ffff.ru',
        phone: 9688050568,
        avatar: '1.jpg',
        login: '',
        password: '967bg87g65',
        balance: 100,
        time_create: '2011-04-30'
      }

      if (this.post.length !== 0) {
        postInStore.id = postInStore.id++
        postInStore.name = this.post.name
        postInStore.family = this.post.surname
        postInStore.login = this.post.login
        console.log(postInStore)
        this.CREATE_USER_TO_API(postInStore)
      } else {
        this.post = ''
      }
    }
  }
}
</script>

<style lang="scss">
  .btn-new {
    width: 100px;
    height: 30px;
    margin: 10px;
    border-radius: 5px;
  }

  .input-user__form {
    margin-top: 20px;
    padding: 20px;
    background: #ccc;
  }

</style>

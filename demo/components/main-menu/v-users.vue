<template>
  <div class="v-users">
    <h2>Пользователи</h2>
    <v-table
      :users_data="USERS"
    />
    <pre>Жду предложений и замечаний</pre>
  </div>
</template>

<script>
import vTable from '../table/v-table'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'VUsers',
  components: {
    vTable
  },
  computed: {
    ...mapGetters([
      'USERS'
    ]),
    pages () {
      return Math.ceil(this.USERS.length / 10)
    },
    paginationUsers () {
      const from = (this.pageNumber - 1) * this.userPerPage
      const to = from + this.userPerPage
      return this.USERS.slice(from, to)
    }
  },
  methods: {
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
  mounted () {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style lang="scss">

</style>

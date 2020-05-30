<template>
  <div class="v-table-row">
    <div class="row row__name">
      {{row_data.name}}
    </div>
    <div class="row row__family">
      {{row_data.family}}
    </div>
    <div class="row row__company">
      {{row_data.company}}
    </div>
    <div class="row row__date">
      {{row_data.time_create}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-table-row',
    props: {
      row_data: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">
  .row {
    flex-basis: 25% ;
    text-align: left;

  }
  .v-table-row{
    display: flex;
    justify-content: space-around;
  }
</style>


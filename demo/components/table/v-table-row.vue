<template>
  <div class="v-table-row">
    <div class="row row__name">
      {{ rowData.name }}
    </div>
    <div class="row row__family">
      {{ rowData.family }}
    </div>
    <div class="row row__company">
      {{ rowData.company }}
    </div>
    <div class="row row__date">
      {{ rowData.time_create }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTableRow',
  props: {
    rowData: {
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

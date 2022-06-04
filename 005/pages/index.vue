<template>
  <div class="main">
    <v-data-table :headers="headers" :items="launches" :items-per-page="20" class="elevation-1"></v-data-table>
    <span>hello</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      launches: [],
      headers: [
        {
          text: 'names',
          align: 'start',
          value: 'name',
        },
        { text: 'rocket', value: 'rocket' },
        { text: 'date_utc', value: 'date_utc' },
        { text: 'launchpad', value: 'launchpad' },
        { text: 'image', value: '' },

      ],
    }
  },
  async fetch() {
    this.launches = await fetch(
      'https://api.spacexdata.com/v4/launches'
    ).then(res => res.json())
  }
})
</script>
<style scoped>
.main {
  max-width: 1200px;
  margin: auto auto
}
</style>

<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    
    <DataBoxes :stats="stats"/>
  </main>
  
  <main
      class="flex flex-col align-center justify-center text-center"
      v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img :src="loadingImage" class="w-24 m-auto" alt="">
  </main>
</template>

<script>
import DataTitle from '@/components/DataTitle.vue';
import DataBoxes from '@/components/DataBoxes.vue';

export default {
  name: 'Home',
  
  data() {
    return {
      loading: true,
      title: 'Глобально',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/coronavirus.png')
    }
  },
  
  components: {
    DataTitle,
    DataBoxes,
  },
  
  methods: {
    async fetchCovidData() {
      const res = await fetch('/summary', {
        method: 'GET',
        redirect: 'follow',
      })
      
      return await res.json()
    }
  },
  
  async created() {
    const data = await this.fetchCovidData()
    
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
  }
}
</script>

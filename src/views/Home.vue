<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate"/>
    
    <DataBoxes :stats="stats"/>
    
    <CountrySelect
        @get-country="getCountryData"
        :countries="countries"
    />
    
    <button
        v-if="stats.Country"
        @click="clearCountryData"
        class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600"
    >Сбросить страну
    </button>
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
import CountrySelect from '@/components/CountrySelect.vue';

export default {
  name: 'Home',
  
  data() {
    return {
      loading:      true,
      title:        'Всемирная',
      dataDate:     '',
      stats:        {},
      countries:    [],
      loadingImage: require('../assets/coronavirus.png'),
    }
  },
  
  components: {
    CountrySelect,
    DataTitle,
    DataBoxes,
  },
  
  methods: {
    async fetchCovidData() {
      const res = await fetch('/summary', {
        method:   'GET',
        redirect: 'follow',
      })
      
      return await res.json()
    },
    
    getCountryData(country) {
      this.stats = country
      this.title = country.Country
    },
    
    async clearCountryData() {
      this.loading = true
      const data   = await this.fetchCovidData()
      this.title   = 'Всемирная'
      this.stats   = data.Global
      this.loading = false
    },
  },
  
  async created() {
    const data     = await this.fetchCovidData()
    this.dataDate  = data.Date
    this.stats     = data.Global
    this.countries = data.Countries
    this.loading   = false
  },
}
</script>

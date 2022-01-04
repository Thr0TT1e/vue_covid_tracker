<template>
  <select
      class="form-select mt-10 block w-full border p-3 rounded"
      v-model="selected"
      @change="onChange()"
  >
    <option value="0">Выберите страну</option>
    <option
        v-for="country in countries"
        :key="country.CountryCode"
        :value="country.ID"
    >{{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CountrySelect',
  
  props: ['countries'],
  
  data() {
    return {
      selected: 0,
    }
  },
  
  methods: {
    onChange() {
      const country = this.countries.find(elem => elem.ID === this.selected)
      this.$emit('get-country', country)
    },
  },
}
</script>

<style scoped>

</style>
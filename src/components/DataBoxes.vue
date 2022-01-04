<template>
  <div class="grid md:grid-cols-2 gap-4">
    <!--  Box 1  -->
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Заболеваний</h3>
      
      <div class="text-2xl mb-4">
        <span class="font-bold">Новых: </span>
        {{ stats.NewConfirmed.toLocaleString() }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Всего: </span>
        {{ stats.TotalConfirmed.toLocaleString() }}
      </div>
    </div>
    
    <!--  Box 2  -->
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Смертей</h3>
      
      <div class="text-2xl mb-4">
        <span class="font-bold">Новых: </span>
        {{ stats.NewDeaths.toLocaleString() }}
      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Всего: </span>
        {{ stats.TotalDeaths.toLocaleString() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBoxes',
  
  props: ['stats'],
}
</script>

<style scoped>

</style>
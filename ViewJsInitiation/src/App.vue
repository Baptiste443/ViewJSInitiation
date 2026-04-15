<template>
  <h1>{{ firstName }}</h1>
  <form action="" @submit.prevent="ChangeName">
    <input type="text" placeholder="Name" v-model="nvNAme">
    <button > Changer</button>
  </form>

</template>

<script setup>
  const firstName ="Jonh"
  const nvNAme ="8"

  const ChangeName= () => {
    firstName=nvNAme
  }
</script>

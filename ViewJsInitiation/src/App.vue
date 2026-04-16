<template>
  <div>
    <h1>{{ firstName }}</h1>
    <form @submit.prevent="changeName">
      <input type="text" placeholder="Name" v-model="nvName">
      <button type="submit">Changer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref('John')
const nvName = ref('')

const changeName = () => {
  firstName.value = nvName.value
}
</script>
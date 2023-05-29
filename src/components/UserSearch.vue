<script setup lang="ts">
import { ref } from 'vue'
import { type Entity } from '@/store/config.store'

interface ConfigProps { config: Entity }
const props = defineProps<ConfigProps>()

const options = ref(props.config.options)
</script>

<template>
  <div>
    <h2>{{ options?.title }}</h2>
    <form action="">
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

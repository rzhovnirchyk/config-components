<script setup lang="ts">
import { type Entity } from '@/store/config.store'
import { ref } from 'vue'

interface ConfigProps { config: Entity }
const props = defineProps<ConfigProps>()

const tiles = ref(props.config.options?.tiles)

</script>

<template>
  <div>
    <h2>Details</h2>
    <div v-for="tile in tiles" :key="tile.title" class="tile">
      <h3>{{ tile.title }} Tile</h3>
      <div>Expanded: {{ tile.expanded }}</div>
      <div>Fields: {{ tile.fields }}</div>
    </div>
  </div>
</template>

<style scoped>
.tile {
  margin-bottom: 1rem;
}
</style>
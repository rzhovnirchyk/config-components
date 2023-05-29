<script setup lang="ts">
import { type Entity } from '@/store/config.store'
import { ref } from 'vue'

interface ConfigProps { config: Entity }
const props = defineProps<ConfigProps>()

const options = ref(props.config.options)
const now = new Date();
const states = [
  {
    date: new Date(now.setDate(now.getDate() - 4)),
    state: 'State 1',
  },
  {
    date: new Date(),
    state: 'State 2',
  },
];

const orderedStates = states.sort((a, b) => options.value?.stateOrder === 'asc' ? a.date.getTime() - b.date.getTime() : b.date.getTime() - a.date.getTime())
</script>

<template>
  <div>
    <h2>State History</h2>
    <div v-for="(state, i) in orderedStates" :key="`state-${i}`">{{ state.state }} - {{ state.date.toLocaleString() }}</div>
  </div>
</template>

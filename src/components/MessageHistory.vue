<script setup lang="ts">
import { type Entity } from '@/store/config.store'
import { ref } from 'vue'

interface ConfigProps { config: Entity }
const props = defineProps<ConfigProps>()

const options = ref(props.config.options)

const messages = [
  {
    'Campaign Name': 'Campaign 1',
    'Message Sent': 'May 29, 2023 17:09',
    'Message': 'Test message 1'
  },
  {
    'Campaign Name': 'Campaign 1',
    'Message Sent': 'May 29, 2023 17:10',
    'Message': 'Test message 2'
  },
  {
    'Campaign Name': 'Campaign 2',
    'Message Sent': 'May 29, 2023 17:11',
    'Message': 'Test message 3'
  }
]
</script>

<template>
  <div>
    <h2>Message History</h2>
    <table>
      <tr>
        <th v-for="col in options?.displayColumns" :key="col">{{ col }}</th>
      </tr>
      <tr v-for="(row, i) in messages" :key="`row-${i}`">
        <th v-for="(c, j) in options?.displayColumns" :key="`col-${j}`">{{ row[c] }}</th>
      </tr>
    </table>
  </div>
</template>

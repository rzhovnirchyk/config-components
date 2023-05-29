<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useConfigStore } from '@/store/config.store'

const configStore = useConfigStore()

const { getFeatureConfig } = storeToRefs(configStore)
const config = getFeatureConfig.value('CustomerCare');

console.log(config)
</script>

<template>
  <div class="customer-care">
    <h1>{{ config?.options?.title }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .customer-care {
    min-height: 100vh;
    display: flex;
    /* align-items: center; */
  }
}
</style>

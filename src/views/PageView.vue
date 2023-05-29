<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useConfigStore } from '@/store/config.store'
import componentMap from '@/componentMap';
import { defineAsyncComponent } from 'vue';

const configStore = useConfigStore()

const { getEntityConfig } = storeToRefs(configStore)

const props = defineProps({
  page: String
})

const config = getEntityConfig.value(props.page)
const children = config?.children ?? {};

const components = Object.keys(children)
	.map(componentKey => {
		const componentPath = `${props.page}.${componentKey}`;
		const component = componentMap[componentPath];
		const componentConfig = getEntityConfig.value(componentPath)
		return {
			name: componentPath,
			component: defineAsyncComponent(() => import(`@/components/${component.componentName}.vue`)),
			props: {
				config: componentConfig,
			}
		}
	})
	.sort((a, b) => {
		return a.props?.config?.options?.componentOrder - b.props?.config?.options?.componentOrder;
	});

</script>

<template>
  <div class="page">
    <h1 v-if="config?.options?.title">{{ config?.options?.title }}</h1>
		<component v-for="c in components" :is="c.component" v-bind="{...c.props}" :key="c.name" class="component" />
  </div>
</template>

<style>
h1 {
	margin-bottom: 2rem;
}
.component {
	margin-bottom: 2rem;
}
.component h2 {
	margin-bottom: 1rem;
}
@media (min-width: 1024px) {
  .page {
    min-height: 100vh;
  }
}
</style>

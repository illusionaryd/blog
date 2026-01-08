<script setup lang="ts">
import { useRoute } from '@app/router/router'
import LoadingView from '@app/views/LoadingView.vue'
import { computed, defineAsyncComponent, h } from 'vue'
const route = useRoute(() => undefined)

const HomeView = defineAsyncComponent({
  loader: () => import('@app/views/HomeView.vue'),
  loadingComponent: h(LoadingView, { fullscreen: true }),
})
const PageView = defineAsyncComponent({
  loader: () => import('@app/views/PageView.vue'),
  loadingComponent: h(LoadingView, { fullscreen: true }),
})

const component = computed(() => {
  const url = new URL(route.path, 'http://example.com')
  if (url.pathname === '/' || url.pathname === '/index' || url.pathname === '/index.html') {
    return HomeView
  } else {
    return PageView
  }
})
</script>

<template>
  <Transition name="fade-in" mode="out-in">
    <component :is="component" />
  </Transition>
</template>

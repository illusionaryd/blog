<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'

const refresh = () => {
  window.location.reload()
}
</script>

<template>
  <div flex="~ col items-center" m-t-24>
    <XMarkIcon class="w-12 h-12" />
    <h3 m-b-2>加载失败</h3>
    <div flex="~ col items-center gap-1" text-center text-subtle>
      <span>报告长官，我们未能突破网络防线</span>
      <span>请检查网络连接，或<a href="#" @click.prevent="refresh">刷新重试</a></span>
    </div>
  </div>
</template>

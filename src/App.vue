<script setup lang="ts">
import { NavigationMenuWrapper, Separator } from '@/components';
</script>

<template>
  <div class="main-content">
    <NavigationMenuWrapper />
    <Separator />
    <RouterView class="py-3" />
  </div>
</template>

<style scoped>
.main-content {
  padding: 24px;
  width: 100vw;
}
</style>

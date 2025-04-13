<template>
  <ClientOnly >
    <div>
      dashboard
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['restricted']
})

</script>

<style>

</style>
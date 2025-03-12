<script setup lang="ts">
definePageMeta({
    validate: () => import.meta.dev
})
</script>

<template>
    hello {{ $route.params.programId }}
</template>

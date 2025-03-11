<script setup lang="ts">
import type { Cat } from "@/db";

const route = useRoute();

const { data: cat} = await useAsyncData<Cat | undefined>("cats", async() => {
    const programId = Number(route.params.programId)
    if (!import.meta.server || !programId) {
    return undefined;
  }

  const {getOneCat} = await import("@/db");
  return getOneCat(programId)
});
</script>

<template>
    <pre>{{ cat }}</pre>
</template>

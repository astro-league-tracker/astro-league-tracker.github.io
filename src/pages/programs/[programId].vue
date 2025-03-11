<script setup lang="ts">
import allCats from "@/db";
</script>

<template>
    <pre>{{ allCats[Number($route.params.programId)] }}</pre>
</template>

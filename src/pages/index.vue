<script setup lang="ts">
import allPrograms from "@/db"

</script>

<template>
  <h1 class="text-3xl font-extrabold mb-3.5">Observing Programs</h1>
  <ul>
    <li class="list-disc  ml-8 pl-2" v-for="program in allPrograms" :key="program.id">
      <NuxtLink :to="`/programs/${program.id}`" class="text-sky-300 hover:underline">{{ program.name }}</NuxtLink>
    </li>
  </ul>
</template>

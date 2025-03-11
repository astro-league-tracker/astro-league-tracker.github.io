<script setup lang="ts">
import allCats from "@/db"

</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="max-w-3xl mx-auto bg-stone-200 my-10 px-6 py-4 text-stone-800">
    Cats:
    <ul>
      <li class="list-disc  ml-8 pl-2" v-for="cat, id in allCats">
        <NuxtLink :to="`/programs/${id}`" class="text-blue-500 hover:underline">{{ cat.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

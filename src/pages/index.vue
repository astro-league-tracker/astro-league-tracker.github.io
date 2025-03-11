<script setup lang="ts">
import type { Cat } from "@/db"

const { data: cats} = await useAsyncData<Cat[]>("cats", async() => {
  if (!import.meta.server) {
    return [];
  }

  const {setUpDb, getAllCats} = await import("@/db");

  setUpDb()
  return getAllCats()
})

</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="max-w-3xl mx-auto bg-stone-200 my-10 px-6 py-4 text-stone-800">
    Cats:
    <ul>
      <li class="list-disc  ml-8 pl-2" v-for="cat in cats">
        <NuxtLink :to="`/programs/${cat.id}`" class="text-blue-500 hover:underline">{{ cat.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

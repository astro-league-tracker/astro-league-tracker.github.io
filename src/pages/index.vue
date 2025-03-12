<script setup lang="ts">
import allPrograms from "@/db";
</script>

<template>
    <div>
        <h1 class="mb-3.5 text-3xl font-extrabold">Observing Programs</h1>
        <ul>
            <li
                v-for="program in allPrograms"
                :key="program.id"
                class="ml-8 list-disc pl-2"
            >
                <NuxtLink
                    :to="`/programs/${program.id}`"
                    class="text-sky-300 hover:underline"
                    >{{ program.name }}</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>

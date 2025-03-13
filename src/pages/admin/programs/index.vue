<script setup lang="ts">
import type { Program } from "@/db";

const { data: programs } = useAsyncData<Program[]>(async () => {
    try {
        return await $fetch("/api/programs", { method: "get" });
    } catch (error) {
        console.error(error);
        return [];
    }
});
</script>

<template>
    <div>
        <h1 class="mb-3.5 text-3xl font-extrabold">All Programs</h1>
        <ul class="space-y-2">
            <li v-for="program in programs">
                <NuxtLink
                    :to="`/admin/programs/${program.id}`"
                    class="text-sky-300 hover:underline"
                    >{{ program.name }}</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>

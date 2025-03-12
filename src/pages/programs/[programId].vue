<script setup lang="ts">
import { micromark } from "micromark";

import allPrograms from "@/db";

const route = useRoute();
const program = computed(() => allPrograms.find((program) => program.id === Number(route.params.programId)))
</script>

<template>
    <h1 class="text-3xl font-extrabold mb-3.5" v-text="program?.name"/>
    <div class="prose prose-invert prose-slate" v-html="micromark((program?.content.replaceAll('\\n', '\n') ?? ''))" />
</template>

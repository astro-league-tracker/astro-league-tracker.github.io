<script setup lang="ts">
import { micromark } from "micromark";

const { getSingleProgram } = usePrograms();

const route = useRoute();
const program = computed(() =>
    getSingleProgram(Number(route.params.programId)),
);
</script>

<template>
    <div>
        <h1 class="mb-3.5 text-3xl font-extrabold" v-text="program?.name" />
        <!-- eslint-disable vue/no-v-html -->
        <div
            class="prose prose-slate prose-invert"
            v-html="micromark(program?.content.replaceAll('\\n', '\n') ?? '')"
        />
        <!-- eslint-enable vue/no-v-html -->
    </div>
</template>

<template>
    <div class="max-w-2xl mx-auto my-24 text-stone-200">
        <NuxtLink v-if="$route.path !== '/'" to="/" class="text-sky-300 mb-6 block hover:underline"><- Back</NuxtLink>
        <slot />
    </div>
</template>

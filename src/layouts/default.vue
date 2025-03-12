<template>
    <div class="mx-auto my-24 max-w-2xl text-stone-200">
        <NuxtLink
            v-if="$route.path !== '/'"
            to="/"
            class="mb-6 block text-sky-300 hover:underline"
        >
            &lt;- Back
        </NuxtLink>
        <slot />
    </div>
</template>

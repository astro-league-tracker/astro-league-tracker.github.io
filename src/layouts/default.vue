<template>
    <div class="min-h-screen min-w-screen bg-slate-950 pt-24 antialiased">
        <div
            class="fixed right-0 bottom-[-30vh] left-0 z-10 h-[40vh] bg-linear-45 from-indigo-800 via-purple-800 to-pink-950 blur-[20vh]"
        />
        <div
            class="relative z-20 mx-auto max-w-3xl rounded-xs bg-slate-950/50 px-12 py-10 text-stone-200"
        >
            <NuxtLink
                v-if="$route.path !== '/'"
                to="/"
                class="mb-6 block text-sky-300 hover:underline"
            >
                &lt;- Back
            </NuxtLink>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const isSubmitting = ref(false);

const handleSubmit = async (e: Event) => {
    isSubmitting.value = true;

    const formData = Object.fromEntries(
        new FormData(e.target as HTMLFormElement),
    );

    try {
        await $fetch("/api/programs", {
            method: "post",
            body: formData,
        });
        router.push("/admin/programs");
    } catch (error) {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="flex w-full flex-col gap-4">
        <h1 class="mb-3.5 text-3xl font-extrabold">Create new program</h1>
        <label class="flex w-full flex-col gap-1">
            <div class="text-xs font-bold">URL</div>
            <input
                name="url"
                class="rounded-xs border border-slate-500 px-2 py-1.5 focus:border-slate-300 focus:outline-0"
                type="text"
            />
        </label>
        <label class="flex w-full flex-col gap-1">
            <div class="text-xs font-bold">Name</div>
            <input
                name="name"
                class="rounded-xs border border-slate-500 px-2 py-1.5 focus:border-slate-300 focus:outline-0"
                type="text"
            />
        </label>
        <label class="flex w-full flex-col gap-1">
            <div class="text-xs font-bold">Content</div>
            <textarea
                name="content"
                rows="20"
                class="rounded-xs border border-slate-500 px-2 py-1.5 focus:border-slate-300 focus:outline-0"
            />
        </label>
        <button
            type="submit"
            class="rounded-xs border border-slate-500 bg-sky-500/10 px-2 py-1.5 hover:cursor-pointer hover:bg-sky-500/30 focus:border-slate-300 focus:outline-0"
            :disabled="isSubmitting"
        >
            {{ isSubmitting ? "Submitting..." : "Submit" }}
        </button>
    </form>
</template>

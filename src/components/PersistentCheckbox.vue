<script setup lang="ts">
const props = defineProps<{
    name: string;
}>();

const storageKey = computed(() => `checkbox:${props.name}`);

const checked = ref();

if (import.meta.client) {
    checked.value = Boolean(window.localStorage.getItem(storageKey.value));

    console.log({ checked: checked.value });

    watch(checked, (isChecked) => {
        console.log({ isChecked });
        if (isChecked) {
            window.localStorage.setItem(storageKey.value, "on");
            return;
        }

        window.localStorage.removeItem(storageKey.value);
    });
}
</script>

<template>
    <input :name="name" type="checkbox" v-model="checked" />
</template>

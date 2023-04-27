<script setup>
const route = useRoute()
const { data: quest } = await useFetch(() => `/api/quest/${route.params.id}`);
</script>

<template>
    <h1>Name : {{quest.name}}</h1>
    <h1>Expansion : {{quest.expansion}}</h1>
</template>

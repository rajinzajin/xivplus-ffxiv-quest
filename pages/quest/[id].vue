<script setup>
const route = useRoute()
const { data: quest } = await useFetch(() => `/api/quest/${route.params.id}`);
</script>

<template>
    <h1>{{quest.name}}</h1>
</template>

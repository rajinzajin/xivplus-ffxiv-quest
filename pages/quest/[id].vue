<script setup>
const route = useRoute()
const { data: quest } = await useFetch(() => `/api/quest/${route.params.id}`);
</script>

<template>
    <h1>Name : {{quest.name}}</h1>
    <h1>Expansion : {{quest.expansion}}</h1>
    <h1>Gil Reward : {{quest.GilReward}}</h1>
    <h1>Journal Genre : {{quest.JournalGenre.Name}}</h1>
    <h1>Exp : {{quest.ExpFactor}}</h1>
    <h1>Class Job Required : {{quest.ClassJob_Required.Abbreviation}}</h1>
    <h1>Location : {{quest.PlaceName.Name}}</h1>
</template>

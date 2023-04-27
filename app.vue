<script setup>
import "~/assets/global.css"
console.log("START")
</script>
<template>
    <NuxtLayout>
        <NuxtLoadingIndicator :throttle="0"/>
        <NuxtPage/>
    </NuxtLayout>
</template>
  
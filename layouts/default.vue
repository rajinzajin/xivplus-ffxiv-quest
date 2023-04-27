<template>
    <div class="bg-ffxiv min-h-[100vh] overflow-auto text-white font-body p-5">
        <div class="flex justify-center">
            <div class="bg-primary w-1/2 p-5 rounded-lg">
                <NuxtLink to="/">Home</NuxtLink>
            </div>
        </div>
        <div class="flex justify-center w-full">
            <div class="w-1/2 p-5">
                <slot />
            </div>
        </div>
    </div>
</template>

<template>
    <div class="bg-ffxiv min-h-[100vh] overflow-auto text-white font-body">
        <slot />
    </div>
</template>

<style>
:root {
    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;

    --bg-ffxiv-opacity: 0.93;
    --rgb-primary: 32, 36, 66;
    --rgb-secondary: 37, 41, 74;
    --color-primary: rgb(var(--rgb-primary));
    --color-secondary: rgb(var(--rgb-secondary));

    --color-highlight-1: rgb(37, 99, 235);
    --color-highlight-2: rgb(96, 186, 228);
}

@font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: 400;
    src: url(https://raw.githubusercontent.com/rajinzajin/ffxiv-market-next/main/public/fonts/Material-Symbols-Outlined.woff2) format('woff2');
}

@font-face {
    font-family: Chelsea Market;
    src: url(https://raw.githubusercontent.com/rajinzajin/ffxiv-market-next/main/public/fonts/ChelseaMarket-Regular.ttf) format("opentype");
}

@font-face {
    font-family: Catamaran;
    src: url(https://raw.githubusercontent.com/rajinzajin/ffxiv-market-next/main/public/fonts/catamaran.woff2) format("woff2");
}

@font-face {
    font-family: Poppins;
    src: url(https://raw.githubusercontent.com/rajinzajin/ffxiv-market-next/main/public/fonts/Poppins-Regular.ttf) format("opentype");
}

.bg-ffxiv {
    background-image: linear-gradient(rgba(var(--rgb-secondary), var(--bg-ffxiv-opacity)), rgba(var(--rgb-secondary), var(--bg-ffxiv-opacity))), url(/img/tiny/ffxiv.webp);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
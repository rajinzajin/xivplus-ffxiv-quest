<script setup>
function search() {
  console.log("GG")
}
</script>
<template>
  <NuxtLayout>
    <div class="grid grid-cols-1 gap-10 m-8">
      <!-- <div class="col-span-1 bg-blue-300 rounded-lg">d</div> -->
      <div class="col-span-1 flex justify-center">
        <input @input="search" type="text" class="bg-primary w-1/3 px-5 py-3 rounded-lg" placeholder="Search Quest" />
      </div>
    </div>
  </NuxtLayout>
</template>

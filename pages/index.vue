<script setup>
const { quests } = useQuest()
const filteredQuests = useState(() => [])

function search(e) {
  const search_val = e.target.value
  let filtered = quests.filter(val => (val.name.toLowerCase().includes(search_val.toLowerCase())))

  if (search_val !== "") {
    filteredQuests.value = filtered.slice(0, 10);
  }
  else { filteredQuests.value = [] }
}

function onSelectQuest(id) {
  navigateTo(`quest/${id}`)
  // router.navigateTo()
}
</script>
<template>
  <div class="grid grid-cols-1 gap-10 m-8">
    <!-- <div class="col-span-1 bg-blue-300 rounded-lg">d</div> -->
    <div class="col-span-1 flex justify-center">
      <input @input="search" type="text" class="bg-primary w-1/3 px-5 py-3 rounded-lg" placeholder="Search Quest" />
    </div>
    <div class="col-span-1 flex justify-center">
      <div>
        <ul>
          <li v-for="q in filteredQuests">
            <div class="my-5 cursor-pointer" @click="() => onSelectQuest(q.id)">{{ q.name }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

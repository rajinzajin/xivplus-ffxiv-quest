import { defineStore } from "pinia";
import quest_list from "~/data/quests.json";
export const useQuest = defineStore("quest", {
	state: () => ({
		quests: quest_list
	}),
    actions:{
        
    }
});

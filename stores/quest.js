import { defineStore } from "pinia";
import quest_list from "~/data/quest_names.json";
export const useQuest = defineStore("quest", {
	state: () => ({
		quests: quest_list
	}),
    actions:{
        
    }
});

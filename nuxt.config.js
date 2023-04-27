// https://nuxt.com/docs/api/configuration/nuxt-config
import quests from "./data/quest_names.json";
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
	hooks: {
		async "nitro:config"(nitroConfig) {
			if (nitroConfig.dev) {
				return;
			}
			// ..Async logic..
			quests.forEach((q) => {
				nitroConfig.prerender.routes.push(`/quest/${q.id}`);
			});
		},
	},
	imports: {
		dirs: ["./stores"],
	},
	// pinia: {
	// 	autoImports: ["defineStore", "acceptHMRUpdate"],
	// },
	
	// nitro: {
	// 	prerender: {
	// 		routes: ["/quest/65623", "/quest/65632"],
	// 	},
	// },
});

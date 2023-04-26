// https://nuxt.com/docs/api/configuration/nuxt-config
import { getQuests } from "./utils/quest";
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
	hooks: {
		async "nitro:config"(nitroConfig) {
			if (nitroConfig.dev) {
				return;
			}
			// ..Async logic..
			const quests = await getQuests();
			quests.forEach((q) => {
				nitroConfig.prerender.routes.push(`/quest/${q["#"]}`);
			});
		},
	},
	// nitro: {
	// 	prerender: {
	// 		routes: ["/quest/65623", "/quest/65632"],
	// 	},
	// },
});

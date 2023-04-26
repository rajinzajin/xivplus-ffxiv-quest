// https://nuxt.com/docs/api/configuration/nuxt-config
import quests from "./data/quests.json";
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss"],
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
	// nitro: {
	// 	prerender: {
	// 		routes: ["/quest/65623", "/quest/65632"],
	// 	},
	// },
});

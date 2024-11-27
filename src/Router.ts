import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("./Views/Home.vue"),
	},	
	{
		path: "/docs",
		name: "documentations",
		component: () => import("./Views/Docs/Startpage.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "not-found",
		component: () => import("./Views/404.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
});

export default router;

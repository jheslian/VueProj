import Vue from 'vue';
import VueRouter from 'vue-router';
import Horloge from '@/views/Horloge.vue';
import Formulaires from '@/views/Formulaires.vue';
import CreerUnForm from '@/views/CreerUnForm.vue';
import Crypto from '@/views/Crypto.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/horloge',
		name: 'horloge',
		component: Horloge,
	},
	{
		path: '/formulaires',
		name: 'formulaires',
		component: Formulaires,
	},
	{
		path: '/creer-un-form',
		name: 'creer-un-form',
		component: CreerUnForm,
	},
	{
		path: '/crypto',
		name: 'crypto',
		component: Crypto,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

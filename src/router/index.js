import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignUp from '../views/SignUp.vue';
import LogoutPage from '../views/LogoutPage.vue';

const routes = [
	{
		name: 'Home',
		path: '/',
		component: HomePage,
		meta: {
			title: 'Online Store --- Home',
			requiresAuth: true,
		}
	},
	{
		name: 'Login',
		path: '/login',
		component: LoginPage,
		meta: {
			title: 'Online Store --- Login',
			requiresAuth: false,
		}
	},
	{
		name: 'SignUp',
		path: '/signup',
		component: SignUp,
		meta: {
			title: 'Online Store --- Sign up',
			requiresAuth: false,
		}
	},
	{
		name: 'LogoutPage',
		path: '/logout',
		component: LogoutPage,
		meta: {
			title: 'Online Store --- Logout',
			requiresAuth: true
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	}
});

router.beforeEach((to, from, next) => {
	if(to.meta && to.meta.title) {
		document.title = to.meta.title;
	}
	
	if(to.name === 'Login') {
		next();
	}
	else if(to.meta && to.meta.requiresAuth === false) {
		next();
	}
	else if(window.localStorage.getItem('userLogged')) {
		next();
	}
	else {
		next({ name: 'Login' });
	}
});


export default router;
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignUp from '../views/SignUp.vue';
import LogoutPage from '../views/LogoutPage.vue';

import RegisterProduct from '../views/RegisterProduct.vue';
import ProductGrid from '../views/ProductGrid.vue';

import auth from '@/logic/auth';

const routes = [
	{
		name: 'Home',
		path: '/',
		component: HomePage,
		meta: {
			title: 'Online Store --- Home',
			requiresAuth: true,
			userTypes: []
		}
	},
	{
		name: 'Login',
		path: '/login',
		component: LoginPage,
		meta: {
			title: 'Online Store --- Login',
			requiresAuth: false,
			userTypes: []
		}
	},
	{
		name: 'SignUp',
		path: '/signup',
		component: SignUp,
		meta: {
			title: 'Online Store --- Sign up',
			requiresAuth: false,
			userTypes: []
		}
	},
	{
		name: 'LogoutPage',
		path: '/logout',
		component: LogoutPage,
		meta: {
			title: 'Online Store --- Logout',
			requiresAuth: true,
			userTypes: []
		}
	},
	{
		name: 'RegisterProduct',
		path: '/product/register',
		component: RegisterProduct,
		meta: {
			title: 'Online Store --- Registrar Producto',
			requiresAuth: true,
			userTypes: ['seller']
		}
	},
	{
		name: 'ProductGrid',
		path: '/product/list',
		component: ProductGrid,
		meta: {
			title: 'Online Store --- Lista de Productos',
			requiresAuth: true,
			userTypes: ['seller', 'customer']
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

	const userLogged = auth.getUserLogged();
	
	if(to.name === 'Login') {
		next();
	}
	else if(to.meta && to.meta.requiresAuth === false) {
		next();
	}
	else if(userLogged && to.meta.userTypes.length === 0) {
		next();
	}
	else if(userLogged && to.meta.userTypes.includes(userLogged.role.toLowerCase()) === true) {
		next();
	}
	else if(userLogged && to.meta.userTypes.includes(userLogged.role.toLowerCase()) === false) {
		next({ name: 'Home' });
	}
	else {
		next({ name: 'Login' });
	}
});


export default router;
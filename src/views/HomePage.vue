<template>
	<div>
		<h1 class="lead">Main Page</h1>
		<p v-if="userLogged">Usuario: {{ userLogged.email }}</p>
		<button class="btn btn-primary" @click="logout">Cerrar Sesión</button>
	</div>
</template>

<script>

import auth from '@/logic/auth';

export default {
	name: 'HomePage',
	methods: {
		logout() {
			auth.deleteUserLogged();
			this.$router.push('/login');
		}
	},
	computed: {
		userLogged() {
			const user = auth.getUserLogged();
			return user;
		}
	}
}

</script>
<style scoped></style>
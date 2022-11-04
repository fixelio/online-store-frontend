<template>
	<div class="container">
		<h1 class="lead">Dashboard</h1>
		<p v-if="userLogged">Usuario: {{ userLogged.email }}</p>
		<p v-if="userLogged">
			Tipo de usuario: {{ userLogged.role === 'seller' ? 'Vendedor' : 'Cliente' }}
		</p>
	</div>
</template>

<script>

import auth from '@/logic/auth';

export default {
	name: 'HomePage',
	computed: {
		userLogged() {
			const user = auth.getUserLogged();
			return user;
		},
	},
}

</script>
<style scoped></style>
<template>
	<div class="d-flex justify-content-center align-items-center mb-5">
		<div class="card rounded shadow-lg">
			<div class="card-body">
				<p>Su sesión ha finalizado exitosamente.</p>
				<p>Por favor, vuelva pronto</p>
				<button class="btn btn-primary">
					<router-link class="text-white" to="/login">Iniciar Sesión</router-link>
				</button>
			</div>
		</div>
	</div>
</template>

<script>

import auth from '@/logic/auth';

export default {
	name: 'LogoutPage',
	mounted() {
		auth.deleteUserLogged();
	}
}

</script>

<style scoped></style>
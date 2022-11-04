<template>
	<div class="centered">
		<div class="card rounded shadow-lg">
			<div class="card-body">
				<p>Su sesión ha finalizado exitosamente.</p>
				<p>Por favor, vuelva pronto.</p>
				<button class="btn btn-primary">
					<router-link
						class="text-white text-decoration-none"
						to="/login">
						Iniciar Sesión
					</router-link>
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

<style scoped>
.centered
{
	position: absolute;
	top: 50%;
	left: 50%;
	width: 240px;
	transform: translate(-50%, -50%);
}
</style>
<template>
	<div class="d-flex justify-content-center align-items-center mb-5">
		<div class="signup d-flex position-relative shadow-lg">
			<div class="leftSide position-relative"></div>
			<div class="rightSide position-relative pt-3">
				<h1 class="lead mb-5">Regístrate</h1>
				<div class="signUpContent m-auto position-relative">
					<form action="#" @submit.prevent="signUp" class="row gy-5">
						<div class="col-sm-6">
							<div class="form-floating">
								<input type="email" name="email" class="form-control" id="email" placeholder="Email" value="" required>
								<label for="email" class="form-label ml-2"><i class="bi bi-person"></i> Correo electrónico</label>
								<div class="valid-feedback"></div>
							</div>
						</div>

						<div class="col-sm-6">
							<div class="form-floating">
								<select
									name="userType"
									id="userType"
									class="form-select"
									v-model="userType"
									required>

									<option v-for="type in userTypes" :key="type" :value="type">{{ type }}</option>
								</select>
								<label for="userType" class="form-label">Tipo de usuario</label>
							</div>
						</div>

						<div class="col-12">
							<div class="form-floating">
								<input
									type="password"
									name="password"
									id="password"
									class="form-control"
									placeholder="Password"
									v-model="password"
									v-bind:class="{ 'is-invalid': !passwordIsCorrect }"
									@change="validate"
									required>

								<label for="password" class="form-label ml-2"><i class="bi bi-lock"></i> Contraseña</label>
								<div class="invalid-feedback">
									La contraseña debe tener al menos 6 caracteres
								</div>
							</div>	
						</div>


						<div class="col-12">
							<div class="form-floating">
								<input
									type="password"
									name="repeat"
									id="repeat"
									class="form-control"
									placeholder="Password"
									v-model="repeatPassword"
									v-bind:class="{ 'is-invalid': !repeatPasswordIsCorrect }"
									@change="validate"
									required>

								<label for="repeat" class="form-label ml-2"><i class="bi bi-repeat"></i> Repite la contraseña</label>
								<div class="invalid-feedback">Las contraseñas no coinciden</div>
							</div>
						</div>

						<button type="submit" class="btn btn-primary d-block w-100">Registrarse</button>
					</form>
				</div>
				<div class="d-block mt-4">
					<p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'SignUp',
	data: () => ({
		email: '',
		password: '',
		repeatPassword: '',
		userType: '',
		passwordIsCorrect: true,
		repeatPasswordIsCorrect: true,
		userTypes: [
			'Cliente',
			'Vendedor',
		],
	}),
	methods: {
		signUp() {
			alert("Sign up");
		},
		validate() {
			this.repeatPasswordIsCorrect = this.password === this.repeatPassword;
			this.passwordIsCorrect = this.password.length >= 6;
		}
	},
}

</script>

<style scoped>
.signup
{
	height: 100%;
	width: 960px;
	max-width: 100%;
}
.signup .leftSide {
	display: none;
}
.signup .rightSide
{
	flex: 100%;
	z-index: 1;
}
.signup .rightSide:before {
	content: ' ';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.1;
	background-image: url('../../public/svg/undraw_access_account_re_8spm.svg');
	background-repeat: no-repeat;
	background-position: 50% 35%;
	background-size: contain;
	pointer-events: none;
	z-index: 1;
}
.signUpContent
{
	width: 90%;
}

@media only screen and (min-width: 768px) {
	.signup
	{
		height: 580px;
	}
	.signup .leftSide
	{
		display: block;
		flex: 40%;
		background: #e5ddd5;
		background-image: url('../../public/svg/undraw_access_account_re_8spm.svg');
		background-repeat: no-repeat;
		background-position: 50% 40%;
		background-size: contain;
	}
	.signup .rightSide
	{
		flex: 60%;
		background: #fff;
		border-right: 1px solid rgba(0,0,0,0.2);
	}
	.signup .rightSide:before
	{
		content: ' ';
		background-image: none;
		pointer-events: none;
		z-index: 1;
	}
}
</style>
<script>

export default {
	name: 'LoginPage',
	methods: {
		login() {
			alert("Login");
		}
	}
}

</script>

<template>
	<div class="d-flex justify-content-center align-items-center mb-5">
		<div class="login d-flex position-relative shadow-lg">
			<div class="leftSide position-relative"></div>
			<div class="rightSide position-relative pt-3">
				<h1 class="lead mb-5">Inicia Sesión</h1>
				<div class="loginContent m-auto position-relative">
					<form action="#" @submit.prevent="login" class="d-block gy-5">
						<div class="form-floating">
							<input type="email" name="email" class="form-control" id="email" placeholder="Email" value="" required>
							<label for="email"><i class="bi bi-person"></i> Correo electrónico</label>
						</div>

						<div class="form-floating">
							<input type="password" name="password" class="form-control" id="password" placeholder="Password" aria-describedby="passwordHelp" value="" required>
							<label for="password"><i class="bi bi-lock"></i> Contraseña</label>
						</div>

						<button type="submit" class="btn btn-primary d-block w-100">Iniciar sesión</button>
					</form>
				</div>
				<div class="d-block mt-4">
					<p>¿No tienes una cuenta? <router-link to="/signup" key="signup">Regístrate aquí</router-link></p>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped>

.login
{
	height: 100%;
	width: 960px;
	max-width: 100%;
}
.login .leftSide {
	display: none;
}
.login .rightSide
{
	flex: 100%;
	z-index: 2;
}
.login .rightSide:before {
	content: ' ';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.1;
	background-image: url('../../public/svg/undraw_login_re_4vu2.svg');
	background-repeat: no-repeat;
	background-position: 50% 25%;
	background-size: contain;
	pointer-events: none;
	z-index: 1;
}
.loginContent
{
	width: 90%;
}
.loginContent form .form-control,
.loginContent form .form-control:focus
{
	outline: none;
	border: none;
	border-bottom: 1px solid #bbb;
	border-radius: 0;
	box-shadow: none;
	margin-bottom: 40px;
}

@media only screen and (min-width: 768px) {
	.login
	{
		height: 540px;
	}
	.login .leftSide
	{
		display: block;
		flex: 55%;
		background: #e5ddd5;
		background-image: url('../../public/svg/undraw_login_re_4vu2.svg');
		background-repeat: no-repeat;
		background-position: 50% 40%;
		background-size: contain;
	}
	.login .rightSide
	{
		flex: 45%;
		background: #fff;
		border-right: 1px solid rgba(0,0,0,0.2);
	}
	.login .rightSide:before
	{
		content: ' ';
		background-image: none;
		pointer-events: none;
		z-index: 1;
	}
}
</style>
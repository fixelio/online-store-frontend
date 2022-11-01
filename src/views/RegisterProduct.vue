<template>
	<div class="container">
		<div class="card mb-5 shadow-lg">
			<div class="card-header">
				<h5 class="lead">Registra un producto</h5>
			</div>
			<div class="card-body">
				<form @submit.prevent="register" class="row gy-5 pt-5">
					<div class="col-sm-12">
						<div class="form-floating">
							<input type="text" :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="name" placeholder="Nombre del producto" v-model="name">
							<label for="name" class="form-label">Nombre del producto *</label>
						</div>
					</div>

					<div class="col-sm-12">
						<div class="form-floating">
							<input type="text" pattern="[0-9]+([,][0-9]{1,2})?" :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="amount" placeholder="Precio del producto" v-model="amount">
							<label for="amount" class="form-label">Precio del producto *</label>
						</div>
					</div>

					<div class="col-sm-12">
						<div class="form-floating">
							<textarea :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="description" placeholder="Descripción del producto" v-model="description"></textarea>
							<label for="price" class="form-label">Descripción del producto *</label>
						</div>
					</div>

					<button class="btn btn-dark" type="submit">Registrar</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

import { useIsOnMobile } from '@/composables/isOnMobile';

export default {
	name: 'RegisterProduct',
	setup() {
		const { isOnMobile } = useIsOnMobile();

		return {
			isOnMobile
		}
	},
	data: () => ({
		name: '',
		amount: 0,
		description: ''
	}),
	methods: {
		register() {
			alert("Registrando...");
		}
	}
}

</script>

<style scoped>

.form-control
{
	border: none;
	outline: none;
	border-radius: 0%;
	border-bottom: 1px solid #212121;
	background: #eeeeee;
	color: 424242;
}

.form-control:focus
{
	outline: none;
	border: none;
	box-shadow: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type=number] {
	-moz-appearance: textfield;
}

</style>
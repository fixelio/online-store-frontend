<template>
	<div class="container">
		<div class="card mb-5 shadow-lg">
			<div class="card-header">
				<h5 class="lead">Registra un producto</h5>
			</div>
			<div class="card-body">
				<form @submit.prevent="insert" class="row gy-5 pt-5" ref="insertForm">
					<div class="col-sm-12 col-lg-6 col-xl-4">
						<div class="form-floating">
							<input type="text" :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="name" placeholder="Nombre del producto" v-model="name" required>
							<label for="name" class="form-label">Nombre del producto *</label>
						</div>
					</div>

					<div class="col-sm-12 col-lg-6 col-xl-4">
						<div class="form-floating">
							<input type="text" pattern="[0-9]+([,][0-9]{1,2})?" :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="price" placeholder="Precio del producto" v-model="price" required>
							<label for="price" class="form-label">Precio del producto *</label>
						</div>
					</div>

					<div class="col-sm-12 col-lg-12 col-xl-4">
						<div class="form-floating">
							<input type="text" :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="category" placeholder="Categoría del producto" v-model="category" required>
							<label for="category" class="form-label">Categoría del producto *</label>
						</div>
					</div>

					<div class="col-12">
						<div class="form-floating">
							<textarea :class="[{'form-control-sm': isOnMobile }]" class="form-control" id="description" placeholder="Descripción del producto" v-model="description" required></textarea>
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
import product from '@/logic/product';

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
		price: 0,
		category: '',
		description: ''
	}),
	methods: {
		async insert() {
			try {
				this.$refs.insertForm.disabled = true;
				const productData = {
					name: this.name,
					price: this.price,
					category: this.category,
					description: this.description
				};

				const data = await product.insert(productData);
				this.$refs.insertForm.reset();

				this.name = '';
				this.price = '';
				this.category = '';
				this.description = '';

				this.$refs.insertForm.disabled = false;

				console.log(data);
			}
			catch(error) {
				console.log(error);
			}
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
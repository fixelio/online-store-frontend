<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<p v-for="product in products" :key="product.code">{{ product.name }}</p>
			</div>
		</div>
	</div>
</template>

<script>

import product from '@/logic/product';

export default {
	name: 'ProductContainer',
	async setup() {
		let products = [];
		try {
			products = await product.findAll();
		}
		catch(error) {
			console.error(error);
			products = [];
		}

		console.log('Products:', products);

		return {
			products
		}
	}
}

</script>

<style scoped></style>
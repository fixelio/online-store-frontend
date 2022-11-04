<template>
	<div class="container">
		<div class="row">
			<ProductItem
				v-for="product in products"
				:key="product.code"
				:product="product"
			/>
		</div>
	</div>
</template>

<script>

import product from '@/logic/product';
import ProductItem from './ProductItem.vue';

export default {
	name: 'ProductContainer',
	components: { ProductItem },
	async setup() {
		let products = [];
		try {
			products = await product.findAll();
		}
		catch(error) {
			console.error(error);
			products = [];
		}

		return {
			products
		}
	}
}

</script>

<style scoped></style>
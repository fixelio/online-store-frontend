<template>
	<Suspense>
		<ProductContainer />
	</Suspense>
</template>

<script>

import ProductContainer from '../components/product/ProductContainer.vue';

export default {
	name: 'ProductGrid',
	components: {
		ProductContainer
	},
	setup() {
		return {}
	},
}

</script>

<style scoed></style>
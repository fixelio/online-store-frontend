<template>
	<div class="card m-4 shadow-lg col-xl-4 col-md-3 col-sm-6">
		<div class="card-body">
			<div class="card-title">{{ product.name }}</div>
			<div class="card-subtitle mb-2 text-muted">{{ product.category }}</div>
			<div class="card-subtitle mb-2 text-muted">{{ product.price }} $</div>
			<div class="card-text">{{ product.description }}</div>
		</div>
	</div>
</template>
<script>

export default {
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			required: true
		}
	}
}

</script>
<style scoped>
	
</style>
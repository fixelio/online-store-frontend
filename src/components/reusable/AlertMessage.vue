<template>
	<div class="alert" :class="isError ? 'alert-danger':'alert-success'" v-show="elementVisible">
		<span>{{ message }}</span>
	</div>
</template>

<script>
	
export default {
	name: 'AlertMessage',
	data() {
		return {
			elementVisible: true,
		}
	},
	created() {
		setTimeout(() => this.elementVisible = false, 5000);
	},
	props: {
		isError: Boolean,
		message: String
	}
}

</script>
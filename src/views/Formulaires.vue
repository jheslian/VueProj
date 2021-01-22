<template>
	<div>
		<h1><strong> Build your form</strong></h1>
		<FormBuilder />
	</div>
</template>

<script>
import FormBuilder from '@/components/FormBuilder.vue';
export default {
	components: {
		FormBuilder,
	},
};
</script>
<style scoped>
#draggable-container {
	border: solid;
	height: 400px;
}
</style>

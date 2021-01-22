<template>
	<div>
		<h1>Build your form</h1>

		<FormBuilder />
		<!-- <div id="draggable-container" @drop="drop" @dragover="allowDrop"></div> -->
	</div>
</template>

<script>
import FormBuilder from '@/components/FormBuilder.vue';
export default {
	components: {
		FormBuilder,
	},
	// methods: {
	// 	allowDrop(ev) {
	// 		ev.preventDefault();
	// 	},
	// 	drop(ev) {
	// 		ev.preventDefault();
	// 		let data = ev.dataTransfer.getData('text');
	// 		console.log(data);
	// 		ev.target.appendChild(document.getElementById(data));
	// 	},
	// },
};
</script>
<style scoped>
#draggable-container {
	border: solid;
	height: 400px;
}
</style>

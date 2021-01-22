<template>
	<button
		class="btn btn-success mt-3"
		draggable="true"
		@dragstart="onDragging"
		id="3"
	>
		<slot />
	</button>
</template>
<script>
export default {
	methods: {
		onDragging(ev) {
			console.log(ev);
			ev.dataTransfer.setData('text', ev.target.id);
		},
	},
};
</script>

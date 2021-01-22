<template>
	<div draggable="true" @dragstart="onDragging" id="2">
		<textarea placeholder=" text area" cols="20" row="15" class="mt-3 ">
		</textarea>
	</div>
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

<style></style>

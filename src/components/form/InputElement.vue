<template>
	<div draggable="true" @dragstart="onDragging" id="1">
		<label v-if="label">{{ label }}</label>
		<input
			class=" mt-3"
			:value="value"
			@input="updateValue"
			:type="type"
			placeholder=" input text"
		/>
	</div>
</template>

<script>
export default {
	props: {
		value: [String, Number],
		label: String,
		type: [String, Number],
	},
	methods: {
		updateValue(event) {
			this.$emit('input', event.target.value);
		},
		onDragging(ev) {
			console.log(ev);
			ev.dataTransfer.setData('text', ev.target.id);
		},
	},
};
</script>

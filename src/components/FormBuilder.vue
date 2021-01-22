<template>
	<div id="app">
		<div ref="container" @drop="drop" @dragover="allowDrop">
			<form class="mb-5">
				<button class="btn btn-danger mr-5" @click.prevent="onClick">
					Button
				</button>
				<button class="btn btn-primary mr-5" @click.prevent="addInput">
					input text
				</button>
				<button class="btn btn-warning" @click.prevent="addtArea">
					description box
				</button>
			</form>
		</div>

		<div class="mt-5 pt-5" id="dropHere" @drop="drop" @dragover="allowDrop">
			<h2>Drop Here</h2>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import ButtonElement from './form/ButtonElement';
import InputElement from './form/InputElement.vue';
import TextAreaElement from './form/TextAreaElement';

export default {
	name: 'app',

	methods: {
		onClick() {
			var ComponentClass = Vue.extend(ButtonElement);
			var instance = new ComponentClass({});
			instance.$slots.default = ['Submit'];
			instance.$mount();
			this.$refs.container.appendChild(instance.$el);
		},
		addInput() {
			var ComponentClass = Vue.extend(InputElement);

			var instance = new ComponentClass({});

			instance.$mount();
			this.$refs.container.appendChild(instance.$el);
		},
		addtArea() {
			var ComponentClass = Vue.extend(TextAreaElement);
			var instance = new ComponentClass({});
			instance.$mount();
			this.$refs.container.appendChild(instance.$el);
		},
		allowDrop(ev) {
			ev.preventDefault();
		},
		drop(ev) {
			ev.preventDefault();
			let data = ev.dataTransfer.getData('text');
			console.log(data);
			ev.target.appendChild(document.getElementById(data));
		},
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
#dropHere {
	border: solid;
	height: 400px;
}
</style>

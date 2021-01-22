<template>
	<div id="app">
		<div id="nav">
			<router-link :to="{ name: 'horloge' }">Horloge</router-link> |
			<router-link :to="{ name: 'formulaires' }">Formulaires</router-link> |
			<router-link :to="{ name: 'crypto' }">Crypto-Monnaie</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	margin-bottom: 3em;
	padding: 30px;
	background-color: rgb(241, 168, 134);
}

#nav a {
	font-weight: bold;
	color: #314150;
	font-size: 30px;
}

#nav a.router-link-exact-active {
	color: #9b854a;
}
</style>

h1{ font-size: 30px; }

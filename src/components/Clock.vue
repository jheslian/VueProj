<template>
	<!-- création d'une instance Vue qui sera représenté par la div avec l’identifiant “app” -->
	<div id="app">
		<!-- div qui contient l'horloge -->
		<div class="clock">
			<!-- div qui contient toutes les aiguilles de l'horloge -->
			<div class="wrap">
				<span class="heure" :style="{ transform: hours }"> </span>
				<span class="minute" :style="{ transform: minutes }"></span>
				<span class="seconde" :style="{ transform: secondes }"></span>
				<span class="dot"></span>
			</div>
		</div>

		<!-- div qui contient l'élément select -->
		<div class="zone">
			<label class="mr-2">Selectionner la zone</label>

			<select v-model="selected">
				<option disabled value=""></option>
				<option v-for="(zone, index) in zones" :key="index">{{
					zone
				}}</option>
			</select>
		</div>
	</div>
</template>

<script>
import moment from 'moment-timezone';
export default {
	data() {
		return {
			hours: '',
			minutes: '',
			secondes: '',
			zones: moment.tz.names(),
			selected: 'Europe/Paris',
		};
	},

	mounted() {
		// Methode qui appelle les fonctions hours(), minute(), seconds toutes les millisecondes sur l'objet Date
		setInterval(() => {
			console.log(this.selected);

			// Instanciation de l'objet natif Date qui récupère la date actuelle
			var dateJ = new Date();

			// Appel de l'heure locale avec la fonction timezone()
			const date = moment.tz(dateJ, this.selected);
			// calcul de l'heure locale comprise entre 0 et 12 heures
			// chaque heure correspond à 30 degrés sur l'horloge
			const hoursT = (((date.hours() + 11) % 12) + 1) * 30;
			const minutesT = date.minute() * 6;
			const secondsT = date.seconds() * 6;

			// valeurs mises en degrés
			this.hours = 'rotate(' + hoursT + 'deg)';
			this.minutes = 'rotate(' + minutesT + 'deg)';
			this.secondes = 'rotate(' + secondsT + 'deg)';
		}, 1000);
	},

	// Methode mount() déclenchée lors du chargement de la page
};
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
}

#app {
	background-color: #13141686;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
}

.clock {
	border-radius: 50%;
	background: #fff;
	border: 5px solid white;
	box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
}

.wrap {
	position: relative;
	width: 350px;
	height: 350px;
}

.dot {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: white;
	border: 2px solid #1b1b1b;
	border-radius: 50%;
	margin: auto;
}

.seconde {
	position: absolute;
	height: 90px;
	width: 2px;
	margin: auto;
	top: -26%;
	left: 0;
	bottom: 0;
	right: 0;
	border-radius: 4px;
	background: #ff4b3e;
	transform-origin: bottom center;
	transform: rotate(180deg);
}

/*
.minute {
    position: absolute;
    height: 130px;
    width: 4px;
    top: -38%;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(53, 28, 122, 0.4);
    transform: rotate(90deg);
}*/

.minute,
.heure {
	position: absolute;
	height: 100px;
	width: 6px;
	margin: auto;
	top: -27%;
	left: 0;
	bottom: 0;
	right: 0;
	transform-origin: bottom center;
	transform: rotate(0deg);
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
	background: black;
}

/* Différenciation de l'aiguille des minutes */
.minute {
	background: rgb(27, 112, 192);
	position: absolute;
	height: 130px;
	width: 4px;
	top: -38%;
	left: 0;
	right: 0;
	transform: rotate(90deg);
}

.zone {
	margin-top: 40px;
	margin-left: 20px;
	color: #1b1b1b;
}
</style>

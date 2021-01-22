<template>
	<div>
		<div id="app">
			<div class="container">
				<div class="card mt-5">
					<h2 class="card-header">
						<strong> {{ title }}</strong>
					</h2>

					<div class="mt-3 mb-1 ">
						<label class="mt-3 mb-4 mr-2" for="crypto"
							>Choose a crypto:</label
						>

						<select v-model="selected" @change="search">
							<option value="" selected disabled hidden
								>-- select a crypto--</option
							>
							<option v-for="(a, index) in cryptos" :key="index">{{
								a.name
							}}</option>
						</select>
						<table v-if="selected" class="table">
							<thead>
								<th>Symbol</th>
								<th>Name</th>
								<th>current price</th>
								<th>Total volume</th>
								<th>price change percentage 24h</th>
							</thead>
							<tbody>
								<tr>
									<td>{{ cryptosFind.symbol }}</td>
									<td>{{ cryptosFind.name }}</td>
									<td>{{ cryptosFind.current_price }}</td>
									<td>{{ cryptosFind.total_volume }}</td>
									<td :style="{ color: couleur }">
										{{ cryptosFind.price_change_percentage_24h }}
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="m-3" v-cloak v-if="num"></div>
					<p>showing {{ num }}</p>
					<table class="table">
						<thead>
							<th>Symbol</th>
							<th>Name</th>
							<th>Current price</th>
							<th>Total volume</th>
							<th>price change percentage 24h</th>
							<th>Remove</th>
						</thead>
						<tbody>
							<tr v-for="(a, index) in cryptos" :key="index">
								<td>{{ a.symbol }}</td>
								<td>{{ a.name }}</td>
								<td>{{ a.current_price }}</td>
								<td>{{ a.total_volume }}</td>
								<td
									:style="{
										color:
											a.price_change_percentage_24h < 0
												? 'red'
												: 'green',
									}"
								>
									{{ a.price_change_percentage_24h }}
								</td>

								<td>
									<button
										@click="remove(index)"
										class="btn btn-danger mt-4"
									>
										remove
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			title: 'Crypto Currency',
			cryptos: [],
			selected: '',
			cryptosFind: '',
			couleur: 'green',
		};
	},
	computed: {
		num: function() {
			return this.cryptos.length;
		},
	},
	created: function() {
		this.fetchCrypto();
	},
	methods: {
		fetchCrypto() {
			let url =
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
			axios.get(url).then((res) => {
				this.cryptos = res.data;
				// this.cryptos.price_change_percentage_24h < 0
				// 	? {couleur = 'red'}
				// 	: {couleur = 'green'};
			});
		},

		search() {
			this.cryptosFind = this.cryptos.find((c) => c.name === this.selected);

			this.couleur =
				this.cryptosFind.price_change_percentage_24h < 0 ? 'red' : 'green';
			console.log(this.cryptosFind);
		},
		remove(index) {
			this.cryptos.splice(index, 1);
		},
	},
};
</script>

<style></style>

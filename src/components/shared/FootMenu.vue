<template>
	<nav
		class="navbar fixed-bottom navbar-light"
		style="background-color: #e3f2fd"
	>
		<span class="navbar-text mr-auto">
			<a href="https://whaledevops.com" target="_blank"><strong>whaledevops.com</strong></a> | kdrkrtin
		</span>
		<span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
			<strong>Alış Tutarı : </strong>
			<span class="badge badge-danger">{{ $filters.currency(getTradeResult.purchase) }}</span>
		</span>
		<span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
			<strong>Satış Tutarı : </strong>
			<span class="badge badge-success">{{ $filters.currency(getTradeResult.sale) }}</span>
		</span>
		<span class="navbar-text navbar-nav my-2 my-lg-0">
			<strong>Bakiye : </strong>
			<span class="badge badge-primary">{{ $filters.currency(getTradeResult.balance) }}</span>
		</span>
	</nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: mapGetters(['getTradeResult'])
};
</script>
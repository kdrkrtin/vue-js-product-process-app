<template>
	<div class="wrapper">
		<div class="loading" :class="loading ? 'active' : ''">
			<div class="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-6 offset-3 pt-3 card mt-5 shadow">
					<div class="card-body">
						<h3>Ürün Çıkışı</h3>
						<hr />
						<div class="form-group">
							<label>Ürün Adı</label>
							<select class="form-control" @change="getValue">
								<option disabled selected>
									Lütfen Ürün Seçiniz
								</option>
								<option
									v-for="product in getProducts"
									:disabled="product.count == 0"
									:value="product.title"
									:key="product.id"
								>
									{{ product.title }}
									{{
										product.count == 0 ? "(Stokta Yok)" : ""
									}}
								</option>
							</select>
						</div>
						<div
							class="card mb-2 border border-danger"
							:class="selected ? 'active' : 'card-hide'"
						>
							<div class="card-body">
								<div class="row">
									<div class="col-12 text-center">
										<div class="mb-3">
											<span class="badge badge-info"
												>Stok :
												{{
													getProducts[index].count
												}}</span
											>
											<span class="badge badge-primary ml-3"
												>Toplam Fiyat :
												{{
													$filters.currency(getProducts[index].price)
												}}</span
											>
										</div>
										<p
											class="
												border border-warning
												p-2
												text-secondary
											"
										>
											{{ getProducts[index].description }}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group position-relative">
							<label>Adet</label>
							<input
								type="number"
								class="form-control"
								:class="{'is-invalid' : checkCount && !checkValues}"
								v-model="saleProductCount"
								placeholder="Ürün adetini giriniz.."
							/>
						</div>
						<hr />
						<button
							class="btn btn-primary"
							@click="saleProduct"
							:disabled="checkCount"
						>
							Kaydet
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			index: 0,
			countAlertText: "",
			value: null,
			saleProductCount: null,
			selectedItemKey: null,
			selected: false,
			loading: false,
			countAlert: false,
		};
	},
	beforeRouteLeave(to, from, next) {
		if ((this.selected || this.saleProductCount) && !this.loading) {
			if (
				confirm(
					"Eğer şimdi bu sayfadan ayrılırsanız yapmış olduğunuz değişiklikler kalıcı olarak silinecek. Emin misiniz?"
				)
			) {
				next();
			} else {
				next(false);
			}
		} else {
			next();
		}
	},
	methods: {
		getValue(e) {
			this.selected = true;
			this.value = e.target.value;
			this.index = this.getProducts.findIndex(
				(item) => item.title == this.value
			);
			this.selectedItemKey = this.getProducts[this.index].key;
		},
		saleProduct() {
			this.loading = true;
			let saleProductObj = {
				key: this.selectedItemKey,
				count: this.saleProductCount,
			};
			this.$store.dispatch("saleProduct", saleProductObj);
		},
	},
	computed: {
		...mapGetters(["getProducts"]),
		checkValues() {
			if (this.selected && this.saleProductCount) {
				return false;
			} else {
				return true;
			}
		},
		checkCount() {
			if (this.getProducts[this.index].count >= this.saleProductCount && this.selected && this.saleProductCount > 0) {
				return false;
			} else {
				return true;
			}
		},
	},
};
</script>
<style scoped>
.card {
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	transition-timing-function: ease-in-out;
	-webkit-transition-timing-function: ease-in-out;
}
.card-hide {
	opacity: 0;
	visibility: hidden;
	height: 0;
}
</style>
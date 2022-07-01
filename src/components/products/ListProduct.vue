<template>
	<div class="wrapper position-relative">
		<div
			class="alert alert-success text-center position-absolute w-100 alert-div"
			:class="getAlert.alertActive ? 'alert-active' : 'alert-hide'"
			role="alert"
		>
			{{ getAlert.updatedText }}
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12 mb-5 card mt-5 shadow">
					<div class="card-body">
						<h3>Ürün Listesi</h3>
						<hr />
						<div class="table-div" v-if="getProducts.length > 0">
							<table
								class="
									table
									table-hover
									table-striped
									table-bordered
									text-center
								"
							>
								<thead>
									<th>id</th>
									<th>Ürün Adı</th>
									<th>Adet</th>
									<th>Fiyat</th>
									<th>Açıklama</th>
								</thead>
								<tbody>
									<tr
										v-for="(product, index) in getProducts"
										:key="index"
										:title="
											product.count <= 0
												? 'Ürün Stokta Yok'
												: product.count < 3
												? 'Ürün stokta mevcut fakat stoktaki ürün adedi azalıyor'
												: 'Ürün stokta mevcut.'
										"
									>
										<td class="align-middle text-center">
											<span class="badge badge-info">
												{{ product.key }}
											</span>
										</td>
										<td class="align-middle text-center">
											{{ product.title }}
										</td>
										<td
											class="
												align-middle
												text-center text-white
											"
											:class="
												product.count <= 0
													? 'bg-danger'
													: product.count < 3
													? 'bg-warning'
													: 'bg-success'
											"
										>
											{{ product.count }}
										</td>
										<td style="width: 150px">
											{{ $filters.currency(product.price) }}
										</td>
										<td class="align-middle">
											{{ product.description }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="alert alert-warning" v-else>
							<strong>Henüz Burada Bir Kayıt Bulamadık</strong>
							<br />
							<small
								>Kayıt Eklemek için
								<router-link to="/urun-girisi"
									>Ürün İşlemleri</router-link
								>
								menüsünden yararlanabilirsiniz
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getProducts", "getAlert"]),
	},
};
</script>
<style scoped>
.alert.alert-div{
	opacity: 0;
	visibility: hidden;
	transition: .5s all;
	-webkit-transition: .5s all;
	transition-timing-function: ease-in-out;
	-webkit-transition-timing-function: ease-in-out;
}

.alert-hide{
	transform: translateY(-100px);
}

.alert-active{
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}
</style>
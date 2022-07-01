<template>
	<nav
		class="navbar navbar-expand-lg navbar-dark"
		style="background-color: #563f7a; z-index:3;"
	>
		<router-link to="/" class="navbar-brand">Ürün Listesi</router-link>
		<div class="collapse navbar-collapse" id="navbarMenu">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link to="/urun-girisi" class="nav-link" active-class="active">Ürün İşlemleri</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/urun-satisi" class="nav-link" active-class="active">Ürün Çıkışı</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
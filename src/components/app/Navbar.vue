<template>
	<div class="Navbar">
		<div class="Navbar-Header">
	  	<div class="Navbar-Info">
	  		<div class="Navbar-Time">{{date | date('datetime')}}</div>
	  	</div>
	  	<div  class="Navbar-Link">
	  		<div class="Navbar-Btn"><router-link to="/"><span>Исполнитель</span></router-link></div>
	  		<div class="Navbar-Btn"><router-link to="/сustomer"><span>Заказчик</span></router-link></div>
	  	</div>
  	</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Navbar
		&-Header
			padding 15px 15px
			display flex
			justify-content space-between
			align-items center
			background #ccc
			-webkit-box-shadow 0px 2px 4px 1px rgba(0,0,0,0.32)
			-moz-box-shadow:0px 2px 4px 1px rgba(0,0,0,0.32)
			box-shadow 0px 2px 4px 1px rgba(0,0,0,0.32)
			position fixed
			left 0px
			right 0px
			z-index 100
			position relative
		&-Time
			margin-left 15px
			font-size 20px
		&-User
			text-transform uppercase
			cursor pointer
		&-Link
			display flex
			justify-content space-between
			align-items center
			width 300px
		&-Btn
			padding 10px
			background #008b8b
			box-sizing border-box
			width 135px
			text-align center
			color #fff
			border-radius 2px
			cursor pointer
			span
				color #fff



</style>

<script>
	export default {
		data: () => ({
			date: new Date(),
			interval: null
		}),
		methods: {
			
		},
		mounted() {
			this.interval = setInterval(() => {
				this.date = new Date()	
			}, 1000) 
		},
		beforeDestroy() {
			clearInterval(this.interval)
		}
	}
</script>
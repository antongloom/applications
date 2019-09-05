<template>
	<div class="Navbar">
		<div class="Navbar-Header">
	  	<div class="Navbar-Btn">
	  		<div class="Navbar-Time">{{date | date('datetime')}}</div>
	  	</div>
	  	<div  class="Navbar-Link"></div>
  	</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Navbar
		&-Header
			padding 25px 15px
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
<template>
	<div class="MainLayout">
		<div class="MainLayout-Content">
			<Navbar />
		</div>
	</div>
</template>


<style lang="stylus" scoped>


</style>

<script>
import Navbar from '@/components/app/Navbar'
export default {
  name: 'main-layout',
  data: () => ({
  	show: false
  }),
  components: {
		Navbar,
	},
	methods: {

	}
}	
</script>
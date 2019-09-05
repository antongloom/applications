<template>
	<div class="MainLayout">
		<Navbar />
		<router-view />
	</div>
</template>


<style lang="stylus" scoped>


</style>

<script>
import Navbar from '@/components/app/Navbar'
export default {
  name: 'main-layout',
  data: () => ({
  	
  }),
  components: {
		Navbar
	}
}	
</script>
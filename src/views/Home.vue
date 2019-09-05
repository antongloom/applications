<template>
  <div class="Home">
  	<div class="Home-Content">
  		<div class="Home-Title">Оставьте информацию о себе</div>
  		<form class="Home-Form">
  			<div class="Home-Item">
					<input type="text" 
								 placeholder="Имя" 
								 class="Home-Input">
					<span class="Home-Error">
							Поле Имя не должно быть пустым
					</span>
				</div>
				<div class="Home-Item">
					<input type="text" 
								 placeholder="Фамилия" 
								 class="Home-Input">
					<span class="Home-Error">
							Поле Фамилия не должно быть пустым
					</span>
				</div>
				<div class="Home-Item">
					<input type="text" 
								 placeholder="Email" 
								 class="Home-Input">
					<span class="Home-Error">
							Поле Email не должно быть пустым
					</span>
					<span class="Home-Error">
							Введите корректный Email
					</span>
				</div>
				<div class="Home-Item">
					<input type="number" 
								 placeholder="Телефон" 
								 class="Home-Input">
					<span class="Home-Error">
							Поле Телефон не должно быть пустым
					</span>
				</div>
  		</form>
  	</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Home
		max-width 600px
		margin 0 auto	
</style>
<script>
export default {
  name: 'home',
  components: {
  	
  }
}
</script>

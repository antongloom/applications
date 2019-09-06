<template>
  <div class="Customer">
  	<div class="Customer-Content">
  		<div class="Customer-Title">Вход</div>
  		<form class="Customer-Form" @submit.prevent="submitHandler">
  			<div class="Customer-Item">
					<input type="number" 
								 placeholder="Номер телефона" 
								 class="Customer-Input"
								 v-model.trim="phone"
								 :class="{invalid: ($v.phone.$dirty && !$v.phone.required)}">
					<span class="Customer-Error"
								v-if="$v.phone.$dirty && !$v.phone.required">
							Поле Номер телефона не должно быть пустым 
					</span>
				</div>
				<div class="Customer-Item">
					<input type="password" 
								 placeholder="Пароль" 
								 class="Customer-Input"
								 v-model.trim="password"
								 :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
								 >
					<span class="Customer-Error"
								v-if="$v.password.$dirty && !$v.password.required">
								Введите пароль
					</span>
					<span class="Customer-Error"
								v-if="$v.password.$dirty && !$v.password.minLength">
								Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}} 
					</span>
				</div>
				<button	type="submit" class="Customer-Btn">Зарегистрироваться</button>
				<div class="Customer-Text">Нет аккаунта? <router-link to="/сustomer"><span>ЗАРЕГЕСТРИРОВАТЬСЯ</span></router-link></div>		
  		</form>
  	</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Customer
		max-width 600px
		margin 0 auto
		&-Content
			padding-top 50px
			padding-bottom 50px
		&-Title
			padding-bottom 25px
			font-size 20px
		&-Item
			padding-bottom 30px
			position relative
			margin-bottom 5px
		&-Input
			width 100%
			height 35px
			box-sizing border-box
			font-size 14px
			border 1px solid #ccc
			outline none
			box-sizing border-box
			padding 0px 15px
			border-radius 6px
		&-Error
			color red
			font-size 12px
			position absolute
			left 0
			top 45px
		&-Btn
			width 300px
			height 35px
			border none
			background #008B8B
			text-transform uppercase
			line-height 35px
			color #fff
			cursor pointer
			border-radius 2px
			display block
			margin 0 auto
			margin-bottom 10px
		&-Text
			text-align center
			font-size 14px
			span
				text-transform uppercase
				color #DAA520
				cursor pointer
</style>
<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'Customer',
  data: () => ({
    phone: '',
    password: ''
  }),
  validations: {
    password: {required, minLength: minLength(6)},
    phone: {required}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
      	password: this.password,
      	phone: this.phone
      }
      console.log(formData)
    }	
  },
}
</script>

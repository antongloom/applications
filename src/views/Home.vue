<template>
  <div class="Home">
  	<div class="Home-Content">
  		<div class="Home-Title">Регистрация Исполнитель</div>
  		<form class="Home-Form" @submit.prevent="submitHandler">
  			<div class="Home-Item">
					<input type="number" 
								 placeholder="Номер телефона" 
								 class="Home-Input"
								 v-model.trim="phone"
								 :class="{invalid: ($v.phone.$dirty && !$v.phone.required)}">
					<span class="Home-Error"
								v-if="$v.phone.$dirty && !$v.phone.required">
							Поле Номер телефона не должно быть пустым 
					</span>
				</div>
			 <div class="Home-Item">
					<input type="number" 
								 placeholder="Код из СМС" 
								 class="Home-Input"
								 v-model.trim="sms"
								 :class="{invalid: ($v.sms.$dirty && !$v.sms.required)}">
					<span class="Home-Error"
								v-if="$v.sms.$dirty && !$v.sms.required">
							Поле Код из СМС не должно быть пустым
					</span>
				</div>
				<div class="Home-Item">
					<input type="password" 
								 placeholder="Пароль" 
								 class="Home-Input"
								 v-model.trim="password"
								 :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
								 >
					<span class="Home-Error"
								v-if="$v.password.$dirty && !$v.password.required">
								Введите пароль
					</span>
					<span class="Home-Error"
								v-if="$v.password.$dirty && !$v.password.minLength">
								Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}} 
					</span>
				</div>
				<div class="Home-Item">
					<input type="text" 
								 placeholder="Фамилия" 
								 class="Home-Input"
								 v-model.trim="secondName"
								 :class="{invalid: ($v.secondName.$dirty && !$v.secondName.required)}">
					<span class="Home-Error"
								v-if="$v.secondName.$dirty && !$v.secondName.required">
							Поле Фамилия не должно быть пустым
					</span>
				</div>
				<div class="Home-Item">
					<input type="text" 
								 placeholder="Имя" 
								 class="Home-Input"
								 v-model.trim="name"
								 :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
								 >
					<span class="Home-Error"
								v-if="$v.name.$dirty && !$v.name.required">
								Введите ваше имя
					</span>
				</div>
				<div class="Home-Item">
					<input type="text" 
								 placeholder="Отчество" 
								 class="Home-Input"
								 v-model.trim="threeName"
								 :class="{invalid: ($v.threeName.$dirty && !$v.threeName.required)}">
					<span class="Home-Error"
								v-if="$v.threeName.$dirty && !$v.threeName.required">
							Поле Отчество не должно быть пустым
					</span>
				</div>
				<div class="Home-Item">
					<input type="text" 
								 placeholder="Описание" 
								 class="Home-Input"
								 v-model.trim="description"
								 :class="{invalid: ($v.description.$dirty && !$v.description.required)}">
					<span class="Home-Error"
								v-if="$v.description.$dirty && !$v.description.required">
							Поле Описание не должно быть пустым
					</span>
				</div>
				<div class="Home-Item">
					<input type="number" 
								 placeholder="Цена за минуту" 
								 class="Home-Input"
								 v-model.trim="price"
								 :class="{invalid: ($v.price.$dirty && !$v.price.required)}">
					<span class="Home-Error"
								v-if="$v.price.$dirty && !$v.price.required">
							Поле Цена за минуту не должно быть пустым
					</span>
				</div>
				<button	type="submit" class="Home-Btn">Зарегистрироваться</button>
				<div class="Home-Text">Уже есть аккаунт? <router-link to="/loginPerformer"><span>Войти</span></router-link></div>	
  		</form>
  	</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Home
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
  name: 'home',
  data: () => ({
    name: '',
    phone: '',
    sms: '',
    password: '',
    secondName: '',
    threeName: '',
    description: '',
    price: ''
  }),
  validations: {
    name: {required},
    password: {required, minLength: minLength(6)},
    phone: {required},
    sms: {required},
    secondName: {required},
    threeName: {required},
    description: {required},
    price: {required}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
      	name: this.name,
      	password: this.password,
      	phone: this.phone,
      	sms: this.sms,
      	secondName: this.secondName,
      	threeName: this.threeName,
      	description: this.description,
      	price: this.price
      }
      console.log(formData)
    }	
  },
}
</script>

<template lang="">
   <div class="register__form"  :class="{'active' : this.$route.path=='/register'}">
                <h1 class="form__title">Register</h1>

                   <form class= "form__register-group" action="javascript:void(0);" >
                    <div class="form__element">
                        <input type="text" class="form__input" placeholder="Full name" v-model="this.registerForm.fullName"/>
                    </div>
                    <div class="form__element">
                        <input type="text" class="form__input" placeholder="Email" v-model="this.registerForm.email"/>
                    </div>
                    <div class="form__element">
                        <input type="text" class="form__input" placeholder="Number Phone" v-model="this.registerForm.numberPhone"  maxlength="10"/>
                    </div>
                    <div class="form__element">
                        <input type="text" class="form__input" placeholder="Address" v-model="this.registerForm.address"/>
                    </div>
                    <div class="form__element">
                        <input type="password" class="form__input" placeholder="Password" v-model="this.registerForm.password" autocomplete="on" required/>
                    </div>
                    <div class="form__element">
                        <input type="password" class="form__input" placeholder="Repeat Password" v-model="this.registerForm.repeatPassword" autocomplete="on" required/>
                    </div>
                    <div class="form__element">
                        <button class="form__btn"  @click="register()">Register</button>
                    </div>
                   </form>
                <p class="form__notify">Have any account ??, login <router-link to="login" class="form__link">here</router-link></p>
            </div>
</template>
<script>
import useShopStore from '../../stores/shopStore';

export default {
    props :['registerForm'],
    methods:{
    register(registerForm){
        this.$emit('register', registerForm)
    }
    }
}
</script>
<style lang="">
    
</style>
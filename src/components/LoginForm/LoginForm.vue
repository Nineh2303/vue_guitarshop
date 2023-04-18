<template lang="">
    <div class="login__form" :class="{'active' :  this.$route.path=='/login'}">
                <h1 class="form__title">Login</h1>
                <form class="form__login-group" action="javascript:void(0);">
                    <div class="form__element">
                        <input type="email" class="form__input" placeholder="Email" v-model="this.loginForm.email" required>
                    </div>
                    <div class="form__element">
                        <input type="password" class="form__input" placeholder="Password" v-model="this.loginForm.password" autocomplete="on" required>
                    </div>
                    <div class="form__element">
                        <button class="form__btn" @click="loginAction">Login</button>
                    </div>
                </form>
                <p class="form__notify">Don't have account??, register <router-link to="register" class="form__link">here</router-link></p>
            </div>
</template>
<script>

export default {
    
    props : ['loginForm'],
    methods : {
        loginAction(){
            this.$emit('login', this.loginForm)
        }
    }
}
</script>
<style lang="">
    
</style>
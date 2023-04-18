<template lang="">
    <div class="user__container">
        <div class="user__main--content">
            <img src="@/assets/img/login_img2.jpg" alt="" class="login__img">
        </div>
        <div class="form__container">
            <div class="form__bar-group">
                <div class="form__bar-main"></div>
                <div class="form__bar-sub" :class="{'active' : this.$route.path=='/register'} "></div>
            </div>
            <LoginForm @login="loginAction(loginForm)" :loginForm="loginForm" />
            <RegisterForm @register="registerAction(registerForm)" :registerForm ="registerForm"/> 
        </div>
    </div>
</template>
<script>
import useShopStore from '../../stores/shopStore'
import userValidate from '../../validate/UserValidate'
import RegisterForm from "../../components/RegisterForm/RegisterForm.vue"
import LoginForm from "../../components/LoginForm/LoginForm.vue"
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const route = useRoute()
        const registerForm = reactive({
            fullName: null,
            email: null,
            numberPhone: null,
            address: null,
            password: null,
            repeatPassword: null
        })
        const loginForm = reactive({
            email: "chinh@gmail.com",
            password: "0000"
        })
        const shopStore = useShopStore();
        const loginAction = async (e) => {
            const { isValidated, form } = userValidate.loginFormValidate(loginForm)
            const res = await shopStore.doLogin(form)
            
            if (res.success) {
                shopStore.loginSuccess(res)
                shopStore.turnOnNotify(res.message, route.path)

            } else {
                shopStore.turnOnNotify(res.message,"/failed")

            }
        }

        const registerAction = async (e) =>{
            const { isValidated, form } = userValidate.registerFormValidate(registerForm)
            if (!isValidated) {
                shopStore.turnOnNotify("Let's fill all data in the form !")
            }
            if (form.password !== registerForm.repeatPassword) {

                shopStore.turnOnNotify("Your password doesn't match, please try again !")
            }
            const res = await shopStore.doRegister(form)
            shopStore.turnOnNotify(res.message, route.path)
        }
        onMounted(() => {
            if (shopStore.isLogin) {
            router.push("/")
        }
        })
        return { shopStore, registerForm, loginForm, loginAction, registerAction }

    },
  

    components: {
        RegisterForm,
        LoginForm
    },


}
</script>
<style lang="css">
@import url("./LoginView.css");
</style>
<template lang="">
      <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <div class="footer__logo">
                    <router-link to="">
                        <h3>NinehShop.</h3>
                    </router-link>
                </div>
                <ul class="footer__contact">
                    <li>NumberPhone: 0123456789</li>
                    <li>Email : ninehshop@gmail.com</li>
                    <li>Address:Ho Chi Minh City </li>
                </ul>
                <div class="footer__options">
                    <p>Category</p>
                    <ul>
                        <li v-for="branch in this.shopStore.branchs"><router-link :to="'/products/'+branch.branchName">{{branch.branchName}}</router-link></li>
                     
                    </ul>
                </div>
                <div class="footer__icon">
                    <router-link to=""> <i class="uil uil-facebook-f"></i></router-link>
                    <router-link to=""><i class="uil uil-linkedin"></i></router-link>
                    <router-link to=""><i class="uil uil-github"></i></router-link>
                </div>
            </div>
            <div class="footer__line"></div>
            <div class="footer__bottom">
                <p>Copyright Nineh@2023</p>
            </div>
        </div>
    </footer>

</template>
<script>
import useShopStore from '../../stores/shopStore';

export default {
    setup(){
        const shopStore = useShopStore()
        return { shopStore }
    }
}
</script>
<style lang="css">
    @import url("./Footer.css");
</style>
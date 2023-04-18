<template lang="">
    <div class="main__container" id="main-container">
        <section class="main__header">
            <div class="main__poster">
                <img src="@/assets/img/home_img.jpg" alt="" class="main__poster-img">
            </div>
            <div class="main__slogan">
                <div class="main__slogan-title-gr">
                    <h1 class="main__slogan-title">We have</h1>
                    <div class="main__slogan-ruler"></div>
                    <div class="main__slogan-row-ruler"></div>

                </div>
                <ul class="main__slogan-list">
                    <li>Musician Instrument</li>
                    <li>Dreams</li>
                    <li>Accessories</li>
                    <li>Custom Style</li>
                    <h3 class="main__slogan-subtitle">for you</h3>
                </ul>
            </div>
        </section>
        <section class="main__body">
            <section class="section products__section">
                <h1 class="section__title">Latest Products</h1>
                <div class="section__product-content">
                    <!-- ===Product cart======     -->
                    <ProductCard v-for="product in this.shopStore.products" :product="product"/>

                </div>
            </section>
            <section class="section contact__section">
                <h1 class="section__title">Contact Me</h1>
                <div class="section__contact-content">
                    <p>To bulding a custom product, let's contact for me with below form</p>
                    <div class="section__contact-form">
                        <div class="section__contact-form-left">
                            <input type="text" class="section__contact-left-input" placeholder="Name">
                            <input type="text" class="section__contact-left-input" placeholder="Number Phone">
                            <input type="text" class="section__contact-left-input" placeholder="Address">
                            <input type="text" class="section__contact-left-input" placeholder="Email">

                        </div>
                        <div class="section__contact-form-right">
                            <textarea name="feedback" placeholder="Your feedback here..." cols="45" rows="8"
                                class="section__contact-right-input"></textarea>
                            <button class="form__btn">Send</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section brands__section">
                <div class="section__branch-show">
                    <router-link v-for="branch in this.shopStore.branchs" :to="'/products/'+ branch.branchName"><img :src="branch.branchImg" alt=""></router-link>

                </div>
            </section>
        </section>
    </div>
</template>
<script>
import useShopStore from '../../stores/shopStore';
import ProductCard from "../../components/ProductCard/ProductCard.vue"

export default {
    setup(){
        const shopStore = useShopStore();
        return { shopStore }
    },
    components : {
        ProductCard
    }
}
</script>
<style lang="css">
    @import url('./HomeView.css');
</style>
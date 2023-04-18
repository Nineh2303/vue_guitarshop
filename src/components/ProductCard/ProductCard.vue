<template lang="">
    <router-link :to="{path:'/product/'+ product.productSlug,
                        props : {product : product}
                        }" class="section__product-link">
                        <div class="product__container">
                            <div class="product__header">
                                <img :src="product.productImg" alt="" class="product__img">
                            </div>
                            <div class="product__line"></div>
                            <div class="product__footer">
                                <div class="product__footer-top">
                                    <h1 class="product__name">{{product.productName}}</h1>
                                </div>
                                <div class="product__footer-bottom">
                                    <h1 class="product__price">25.000.000 VND</h1>
                                    <h3>Còn hàng</h3>
                                </div>
                            </div>
                        </div>
    </router-link>
</template>
<script>
export default {
    props : ['product']
}
</script>
<style lang="css">
    @import url('./ProductCard.css');
</style>
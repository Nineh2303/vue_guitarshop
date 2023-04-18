<template lang="">
    <div>
        <!-- {{product}} -->
        <div class="product__detail-container">
            <div class="product__infomation">
                <div class="product__img">
                    <img :src="product.productImg" alt="" class="product__detail-img">
                </div>
                <div class="product__detail">
                    <h2>{{product.productName}}</h2>
                    <div class="product__status-group">
                        <h4 class="product__price">{{product.productPrice}}$</h4>
                        <template v-if="product.inStock">
                            <p class="product__status in-stock">In Stock</p>
                        </template>
                        <template v-else>
                            <p class="product__status out-stock">Out Stock</p>
                        </template>
                    </div>
                    <p class="product__description">{{product.productDescription}}</p>
                    <v-table >
                    <tbody>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                    <tr class="table__tr">
                        <td class="product__td">Name</td>
                        <td class="product__td">Category</td>
                    </tr>
                   
                    </tbody>
                    </v-table>
                    <button class="add__btn">Add to Cart</button>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import useShopStore from '../../stores/shopStore';
export default {
    setup() {
        const shopStore = useShopStore();
        console.log(shopStore.products)
        return { shopStore }
    },
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        this.fetchingProductDetail()
    },
    methods: {
        async fetchingProductDetail() {
            const url = `api/v1/product/` + this.$route.params.productSlug
            const res = await this.shopStore.fetchingProductDetail(url)
            this.product = res.product
            return
        }
    }
}
</script>
<style lang="css" scoped>
@import url("./SingleProduct.css");
</style>
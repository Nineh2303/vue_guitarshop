<template lang="">
    <div class="view__container">
        <h2 class="brand__name">{{this.brandName}} guitars</h2>
            
        <div class="product_list-container">
        <ProductCard v-for="product in productbyCategory" :product="product"/>
    </div>
    </div>
</template>
<script>
import { computed,  ref, watch,} from 'vue';
import ProductCard from '../../components/ProductCard/ProductCard.vue';
import useShopStore from '../../stores/shopStore';
import {  useRoute } from "vue-router"
export default {    
    setup(props){
        const route  = useRoute()
        const shopStore = useShopStore();
        const params = ref(route.params)
        const brandName = ref(route.params.brandName) 
        watch(()=> route.params.brandName, newBrandName=>{
                console.log(newBrandName)
                brandName.value=  newBrandName 

       })
        const productbyCategory = computed(()=>{
            if (brandName.value !== 'All'){
                return shopStore.products.filter(product=>product.productBrand == brandName.value)
            }  else return shopStore.products
        })
    
        
        return { shopStore, brandName, params, route, productbyCategory }   
    },

    components :{
        ProductCard
    }
}
</script>
<style lang="css">
   @import url("./ProductView.css"); 
</style>
<template>
  <div class="view__container">
    <div class="view__header">
      <h2 class="brand__name">
        {{ brandName != null ? ` Result for '${brandName}'` : "All products" }}
      </h2>
      <div class="option">
        <div class="text-center">
          <SelectCustom :options="sortTypes"
                        :sortKey="'sortName'"
                        @handle="handleSort"/>
        </div>
      </div>
    </div>
    <div class="product_list-container">
      <ProductCard v-for="product in productByCategory.value" :product="product"/>
    </div>
  </div>
</template>
<script setup>
import {computed, reactive, ref, watch,} from 'vue';
import ProductCard from '../../components/ProductCard/ProductCard.vue';
import useShopStore from '../../stores/shopStore';
import {useRoute} from "vue-router"
import {sortTypes} from "@/helpers/SortType";
import SelectCustom from "@/components/SelectCustom/SelectCustom.vue";

const route = useRoute()
const shopStore = useShopStore();
const brandName = ref(route.params.brandName)
const productByCategory = reactive([])
const sortOption = reactive({})


watch(() => route.params.brandName, newBrandName => {
  brandName.value = newBrandName
})
productByCategory.value = computed(() => {
  if (brandName.value != null) {
    return shopStore.products.filter(product => product.productName.trim().toString().toLowerCase().includes(brandName.value.trim().toString().toLowerCase()))
  } else {
    return shopStore.products
  }
})
const handleSort = (option) => {
  sortOption.value = option
  let data = [...productByCategory.value]
  switch (option.sortCode) {
    case 'ASCENDING':
      return productByCategory.value = computed(() => {
        return data.sort((e1, e2) => e1.productPrice - e2.productPrice)
      });
    case 'DESCENDING' :
      return productByCategory.value = computed(() => {
        return data.sort((e1, e2) => e2.productPrice - e1.productPrice)
      });
    case 'ATOZ' :
      return productByCategory.value = computed(() => {
        return data.sort((e1, e2) => e1.productName.localeCompare(e2.productName))
      });
    case 'ZTOA' :
      return productByCategory.value = computed(() => {
        return data.sort((e1, e2) => e2.productName.localeCompare(e1.productName))
      });
    case 'NONE':
      return shopStore.products.filter(product => product.productName.trim().toString().toLowerCase().includes(query.trim().toString().toLowerCase()))

  }
}


</script>
<style lang="css" scoped>
@import url("./BrandView.css");
</style>
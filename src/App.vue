
<template>
  <Notify v-if="this.shopStore.isNotify"/>
  <Header/>
  <RouterView />
  <Footer/>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Notify from './components/NotifyContent/Notify.vue';
import useShopStore from './stores/shopStore'
export default {
  setup(){
    const shopStore = useShopStore();
    return {shopStore} 
  },

  components : {
  Header,
  Footer,
  Notify
}
}
</script>


<style>
</style>

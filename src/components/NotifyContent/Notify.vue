<template lang="">
    <div class="notify__container">
        <div class="notify__content">
            <h2 class="notify__text">{{shopStore.notifyContent}}</h2>
            <button class="notify__btn" @click="handleNotify">Contitnue</button>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import useShopStore from '../../stores/shopStore';
export default {
    setup(){
        const shopStore = useShopStore();
        const router = useRouter()
        const handleNotify =()=>{
            shopStore.turnOffNotify();
            if(shopStore.path =='/login'){
                router.push("/")
            }
        }
        return {shopStore, handleNotify}
    }
}
</script>
<style lang="css">
    @import url("./Notify.css");
</style>
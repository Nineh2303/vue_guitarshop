<template lang="">
     <header class="header" id="header">
        <div class="header__container">
            <div class="header__logo">
                <router-link to="/">
                    <h3>NinehShop.</h3>
                </router-link>
            </div>
            <div class="header__menu">
                <div class="header__menu-item searchbar-group">
                        <input @keyup.enter="searchHandle" type="text" v-model="this.searchKey" class="header__searchbar-input" placeholder="Search...">
                    <!-- <i class="uil uil-search header__menu-searchbar-icon"></i> -->
                    <unicon name="search" class="header__menu-searchbar-icon"  @click="searchHandle"/>
                </div>
                <div class="header__menu-item">
                    <router-link to="/" class="header__menu-link">
                        Home 
                    </router-link>
                    <div class="header__menu-item-bar"></div>

                </div>
                <div class="header__menu-item menu__dropdown" id="menu-dropdown" @mouseenter="onMouse" @mouseleave="outMouse">
                    <span>Products</span>
                    <div class="header__menu-item-bar"></div>

                    <div class="header__menu-list" :class="{active : isActive}">
                        <ul >
                            <li>
                                <router-link :to="'/products/All'" class="brand__show">All Products</router-link>
                            </li>
                            <li v-for="branch in this.shopStore.branchs">
                                <router-link :to="'/products/'+branch.branchName" class="brand__show">{{branch.branchName}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header__menu-item">
                    <router-link to="" class="header__menu-link">
                        Contact
                    </router-link>
                    <div class="header__menu-item-bar"></div>
                </div>

                <div class="header__menu-item">
                    <router-link to="" class="header__menu-link">
                        About
                    </router-link>
                    <div class="header__menu-item-bar"></div>

                </div>

               <template v-if="this.shopStore.isLogin">
               
                <div class="header__menu-item">
                    <router-link to="/">
                    <button class="header_register-button" @click="logout">Logout</button>
                    </router-link>
                </div>
               </template>
               <template v-else="this.shopStore.isLogin">
                <div class="header__menu-item">
                    <router-link to="/register" class="header__menu-link">
                        Register
                    </router-link>
                </div>
                <div class="header__menu-item">
                    <router-link to="/login">
                    <button class="header_register-button">Login</button>
                    </router-link>
                </div>
               </template>
                <div class="header__menu-item">
                    <router-link to="" class="header__menu-link">
                        <div class="header__menu-cart-group">
                            <!-- <i class="uil uil-shopping-cart header__menu-cart-item"></i> -->
                            <unicon name="shopping-cart" class="header__menu-cart-item"/>
                            <div class="header__menu-cart-count">
                                <span>0</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { ref } from "vue";
import useShopStore from "../../stores/shopStore"
export default {
    setup(){
        const shopStore = useShopStore();
        const  searchKey = ref("")
        let isActive  =  ref(false)
        const onMouse = ()=>{
            isActive.value = true
        }
        const outMouse =()=>{
           isActive.value = false
        }
        const fetchingBranch =()=>{
            try {
                shopStore.fetchingBranch();
            }
            catch(err){
                console.log(err)
            }
        }
        const logout= ()=>{
            shopStore.doLogOut()
            shopStore.turnOnNotify("Logout Success !!")
        }
        const searchHandle =() =>{
            console.log(searchKey)
        }
        return { shopStore, searchKey, onMouse, outMouse, isActive, fetchingBranch, logout, searchHandle}
    },
 
   
   created() {
        this.fetchingBranch()
    },
    methods: {
        
        
    },
}
</script>
<style lang="css">
@import url("./Header.css");
</style>
import { defineStore } from 'pinia'
import axiosRequest from '../configs/AxiosConfig'
import { useRoute } from 'vue-router'


const useShopStore =  defineStore('shopStore',{
   state : ()=>{
    return {
      name : "Nineh",
      branchs : [],
      products : [],
      isNotify : false,
      path : '',
      notifyContent: '',
      user : JSON.parse(localStorage.getItem('user')) || null,
      accessToken : localStorage.getItem('accessToken')|| null,
      refreshToken : localStorage.getItem('refreshToken')|| null, 
      isLogin  : JSON.parse(localStorage.getItem('user')) ? true : false
      
    }
    
   },
 
   getters :{
   },
   actions : {
       async fetchingBranch(){
        try {
          const branchData= await axiosRequest.get('/api/v1/branch')
          this.branchs =  branchData.listBranch
          
          const productData =await axiosRequest.get('/api/v1/product')
          this.products= productData.products
        }catch(err){  
          console.log(err)
        }
      
      },
    turnOffNotify (){
      this.isNotify = false
      return ;
    },
    turnOnNotify(notifyContent, path){
        this.notifyContent =  notifyContent 
        this.isNotify = true
        this.path = path        
        return
    },
    async doRegister(registerForm){
      try {
          const res  = await axiosRequest.post("/api/v1/user/register",registerForm)
          return res
      } catch (err){
        this.turnOffNotify("Please checking your network")
        return {
          success: false,
          message :"Network error, please checking your internet !"
        }
      }
    },
    async doLogin(loginForm) {
      try {
        const res= await axiosRequest.post("/api/v1/user/login", loginForm)
      
        return  res ;

      } catch (err) {
        console.log(err)
          return {
          success: false,
          message :"Network error, please checking your internet !"
        }
      }
    },
    loginSuccess(res){
        this.user=  res.user
        this.accessToken = res.accessToken
        this.refreshToken = res.refreshToken
        this.isLogin = true

        localStorage.setItem("user", JSON.stringify(res.user))
        localStorage.setItem("refreshToken", res.refreshToken)
        localStorage.setItem("accessToken", res.accessToken)
    },
    doLogOut() {
        this.user=  null
        this.accessToken = null
        this.refreshToken = null
        this.isLogin = false

        localStorage.removeItem("user")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("accessToken")
    },
    async fetchingProductDetail(url){
      const res = await axiosRequest.get(url)
      return res
    }
   }
})

export default useShopStore 
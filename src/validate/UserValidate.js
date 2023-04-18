

const userValidate= {
    registerFormValidate :(registerForm)=>{
            if (   registerForm.fullName == null 
                || registerForm.email == null
                || registerForm.numberPhone== null
                || registerForm.address== null
                || registerForm.password == null){
                    return  {
                        isValidated : false , 
                        form: null
                    }
                }
        const formResponse = {
            fullName : registerForm.fullName.trim(),
            email: registerForm.email.trim().toLowerCase(),
            numberPhone: registerForm.numberPhone.trim(),
            address : registerForm.address.trim(),
            password: registerForm.password
        }
        return {  isValidated : true, form : formResponse}
                
    },
    loginFormValidate: (loginForm) =>{
        if(loginForm.email == null || loginForm.password==null)
        return ({isValidated: false, form : null})

        const formResponse ={
            email : loginForm.email.trim().toLowerCase(),
            password: loginForm.password
        }
        return ({isValidated: true, form : formResponse})
    }
}
export default userValidate
import axios from "axios"

axios.defaults.baseURL="http://localhost:5500"
axios.defaults.headers.common['Authorization'] = null



const axiosRequest = {
    get: async(url)=>{
        try{
        const res =  await axios.get(url);
        return res.data
        } catch (err){
            throw err
        }
    },
    post: async(url, data)=>{
        try {
            const res = await axios.post(url,data)
            return res.data
        } catch (err){
            throw err
        }
    }
}
export default axiosRequest
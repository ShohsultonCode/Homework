import axios from "axios"
const baseUrl = "https://jsonplaceholder.typicode.com"
const asos = "http://localhost:8080"
export const API = {
    getAllPosts: ()=>{
    return axios.get(baseUrl + "/todos")
    },
    getAllComments: ()=>{
        return fetch(`${baseUrl}/comments`)
    },
    getUser:()=>{
        return axios.get(asos+"/user")
    },
    addUser:(params)=>{
        return axios.post(`${asos}/user`, params)
    }

    
}
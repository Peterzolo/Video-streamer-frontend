import axios from "axios";

const url = "http://localhost:5000/api"
const Api = axios.create({baseURL : url})

export const signIn = (formData) => Api.post("/user/login", formData)
export const register = (formData) => Api.post("/user/register", formData)
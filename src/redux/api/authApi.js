import axios from "axios";

const url = "http://localhost:5000/api"
const Api = axios.create({baseURL : url})

export const signInApi = (formData) => Api.post("/user/login", formData)
export const registerApi = (formData) => Api.post("/user/register", formData)
// import axios from 'axios'
// const defaultConfig = {
//   timeout: 5000,
//   baseUrl: ''
// }
// const axiosInstance = axios.create(defaultConfig)

// axiosInstance.interceptors.request.use(config => {
//   return config
// }, err => {
//   return Promise.reject(err)
// })
// axiosInstance.interceptors.response.use(config => {
//   return config
// }, err => {
//   return Promise.reject(err)
// })
// function get(url:string, params:{}) {
//   return axiosInstance.get(url, params).then(res => res.data).catch()
// }
// function post(url:string, params:{}) {
//   return axiosInstance.post(url, params).then(res => res.data).catch()
// }
// export default {
//   get,
//   post
// }
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}
class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private static axiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }

  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  public get<T>(url:string, params:AxiosRequestConfig):Promise<T> {
    return Http.axiosInstance.get(url, params).then(res => res.data).catch()
  }

  public post<T>(url:string, params:AxiosRequestConfig):Promise<T> {
    return Http.axiosInstance.post(url, params).then(res => res.data).catch()
  }
}

export const http = new Http()

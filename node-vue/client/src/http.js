import axios from 'axios'
import {Message,Loading} from 'element-ui'


let loading;
function startLoading(){
  loading = Loading.service({
    lock:true,
    text: "loading",
    background:'rgba(0,0,0,.7'

  })
}
function endLoading(){
  loading.close()
}

axios.interceptors.request.use(
  config => {
    startLoading()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(response => {
  endLoading()
  return response
},error => {
  endLoading()
  Message.error(error.response.data)
  return Promise.reject(error)
})


 
export default axios
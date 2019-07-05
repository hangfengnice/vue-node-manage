import axios from "axios";
import router from "./router";
import { Loading, Message } from "element-ui";

let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "努力加载中 @ @.",
    background: "rgba(0,255,0,.7)"
  });
}

function endLoading() {
  loading.close();
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    startLoading();
    if (localStorage.eleToken) {
      config.headers.Authorization = localStorage.eleToken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    loading.close();
    return response;
  },
  error => {
    endLoading();
    Message.error(error.response.data);

    // 获取错误状态码
    const { status } = error.response;
    if (status == 401) {
      Message.error("token失效,需要重新登录 @@");
      // 清除token
      localStorage.removeItem("eleToken");
      // 跳转登录页面
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export default axios;

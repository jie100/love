/**
 * Created by eric on 1/1/19.
 */
import axios from "axios";
import store from "./index.js";

//全局请求拦截
axios.interceptors.request.use(
  config => {
    if (config.method === "post") {
        const token = store.state.token;
        config.headers.token = token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

//全局响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (err.response) {
      alert(err.response.data);
    }
    return err.response;
  }
);

const host = "http://";
const doApi = {
  // 注册
  REGISTER: "user/register",
  //获取验证码
  CODE: 'user/code'
};

const fetch = function(url, data, method) {
  if (method === "get") {
    url += data;
    data = null;
  }
  return axios[method](url, data).then(response => {
    return response;
  });
};

const api = {
  //get Code
  getCode (phone) {
    const data = "?phone=" + phone;
    return fetch(host + doApi.CODE, data, "get");
  },
  // 注册
  register (data) {
    return fetch(host + doApi.REGISTER, data, "post");
  }
}

export default api

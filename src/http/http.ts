import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  // 固定请求地址
  baseURL: '/api', // 可以改成你想要的地址
  // 请求超时时间
  timeout: 20000,
  // 当前请求默认请求头
  // header:{

  // }
});

// 创建请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config.headers.token = '123';
    return config;
  },
  (err: any) => {
    // 错误抛到业务代码
    err.data = {};
    err.data.msg = '服务器异常，请联系管理员！';
    return Promise.resolve(err);
  }
);

// 创建响应拦截
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      return res;
    }
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

/* 统一封装get请求 */
export const get = (url: string, params?: any, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config,
    })
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

/* 统一封装post请求  */
export const post = (url: string, data?: any, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config,
    })
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

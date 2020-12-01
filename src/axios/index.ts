import axios from "axios";
import store from '../store'
interface Iservice {
  [propName: string]: any
}
const service: Iservice = axios.create({
  baseURL: "http://127.0.0.1:3000", //process.env.  可以配置环境变量进行获取
  // baseURL: "http://192.168.1.11:8888", //process.env.  可以配置环境变量进行获取
  timeout: 20000, //请求超时的时间
});
// request拦截器,在请求之前做一些处理
service._requestCount = 0; // 接口请求累加
service.interceptors.request.use(
  (config: any) => {
   

    // 如果需要序列化
    // if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') { //post请求序列化
    //   config.data = qs.stringify(config.data);
    // }
    service._requestCount++;
    // 全局loading
    store.commit('Loading/openLoading')
    return config;
  },
  (error: any) => {
    console.log(error);
    Promise.reject(error);
  }
);

// response 拦截器,数据返回后进行一些处理
service.interceptors.response.use(
  (response: any) => {
    service._requestCount--;
    // --是为了让loading消失，因为上面++，所以待成功后让其抵消为0；（下同）
    if (service._requestCount <= 0) {
      // 如果接口请求累加值小于0 那么关闭loading
      store.commit('Loading/closeLoading')
    }
    const res = response.data;
    // 返回请求值
    return res;
  },
  (error: any) => {
    // 如果接口出错，当然，也可以根据错误的状态码进行错误信息配置，
    // 因为接口中没有返回特定状态码，所以没有配置
    service._requestCount--;
    if (service._requestCount <= 0) {
      store.commit('Loading/closeLoading')
    }
    Promise.reject(error);
  }
);


export default { service };

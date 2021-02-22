import axios from "axios";
import { ElLoading } from "element-plus";
const options = {
  lock: true,
  text: '拼命加载中...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
};
const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "/feq",
  timeout: 20000, //请求超时的时间
});
const arr = [service];
let loadingCount = 0;
arr.forEach(item => {
  loadingCount = 0; // 接口请求累加
  item.interceptors.request.use(
    (config) => {
      // 如果需要序列化
      // if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') { //post请求序列化
      //   config.data = qs.stringify(config.data);
      // }
      loadingCount++;
      // 全局loading
      ElLoading.service(options);
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  // response 拦截器,数据返回后进行一些处理
  item.interceptors.response.use(
    (response) => {
      loadingCount--;
      // --是为了让loading消失，因为上面++，所以待成功后让其抵消为0；（下同）
      if (loadingCount <= 0) {
        ElLoading.service(options).close();
        // 如果接口请求累加值小于0 那么关闭loading
      }
      const res = response.data;
      // 返回请求值
      return res;
    },
    (error) => {
      // 如果接口出错，当然，也可以根据错误的状态码进行错误信息配置，
      // 因为接口中没有返回特定状态码，所以没有配置
      loadingCount--;
      if (loadingCount <= 0) {
        ElLoading.service(options).close();
      }
      Promise.reject(error);
    }
  );
})
// request拦截器,在请求之前做一些处理


export default { service };

import axios from "axios";
import qs from "qs";
// 数据拦截器


/**
 * @author hiroki.zhu
 * @desc 网络请求工具类  处理数据,按通用格式返回
 * @param {Object} obj 原始数据返回格式
 */
class Axios {
  ajax(config = {}) {
    return axios(config);
  }

  get(url, config = {}, isMobile=true) {
    if(isMobile){
      config.tags = "mobile";
    }
    return axios.get(url, {
      params: config
    });
  }

  post(url, config = {}, isMobile = true) {
    if (isMobile) {
      config.tags = "mobile";
      config = qs.stringify(config);
    }
    return axios.post(url, config);
  }

  del(url, config = {}, isMobile = true) {
    if (isMobile) {
      config.tags = "mobile";
      config = qs.stringify(config);
    }
    return axios.delete(url, {
      data: config,
      withCredentials: true
    });
  }
}

export default new Axios();
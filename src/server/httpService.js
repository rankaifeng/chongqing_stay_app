import Taro from '@tarojs/taro';
import apiConfig from './baseUrl';
import FormData from './FormData';

//网络请求拦截器
const interceptor = chain => {
    const requestParams = chain.requestParams;
    let token = Taro.getStorageSync('token'); //拿到本地缓存中存的token
    requestParams.header = {
        ...requestParams.header,
        Authorization: `${token}`, //将token添加到头部
        'X-Custom-Header': 'app'
    };
    return chain.proceed(requestParams).then(res => {
        return res;
    });
};

Taro.addInterceptor(interceptor);

const request = async (method, url, params) => {
    //由于post请求时习惯性query参数使用params，body参数使用data，而taro只有data参数，使用contentType作为区分，因此此处需要做一个判断
    let contentType = params?.data ? 'application/json' : 'application/x-www-form-urlencoded';
    if (params) contentType = params?.headers?.contentType || contentType;
    const option = {
        method,
        isShowLoading: false,
        url: `${apiConfig.baseUrl}${url}`,
        data: method === 'GET' ? params : params && params.buffer,
        header: {
            'content-type': params && params.contentType,
        },
    };
    const resp = await Taro.request(option);
    if (resp.statusCode === 502) {
        Taro.showToast({ title: '连接服务器失败', icon: 'none' });
        return;
    } else {
        const { code, msg } = resp.data;
        return resp.data;
    }
};
const removeUndefinedProperties = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] === undefined || obj[key] === '')) {
            delete obj[key];
        }
    }
    return obj;
};
export const postFile = (url, params) => {
    let formData = new FormData();
    formData.append('file_type', params.file_type);
    formData.appendFile('file_value', params.file_value);
    if (params.school_info_id) {
        formData.append('school_info_id', params.school_info_id);
    }
    let data = formData.getData();
    return request('POST', url, data);
};
export const post = (url, params) => {
    if (params) {
        const mParams = removeUndefinedProperties(params);
        let formData = new FormData();
        for (let i in mParams) {
            if (i === 'file_value' || i === 'img' || i === 'picture1') {
                formData.appendFile(i, mParams.file_value || mParams.img || mParams.picture1);
            } else {
                formData.append(i, mParams[i]);
            }
        }
        let data = formData.getData();
        return request('POST', url, data);
    }
};
export const get = (url, params) => {
    const m = removeUndefinedProperties(params);
    return request('GET', url, m);
};
export const put = (url, params) => request('PUT', url, params);
export const del = (url, params) => request('DELETE', url, params);

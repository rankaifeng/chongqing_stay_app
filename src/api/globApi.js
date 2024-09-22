import Taro from '@tarojs/taro';
import { get, post, postFile, put } from '../server/httpService';


export const getStudentList = (params) => get('/user_manage/student_info/student_info_list', { page: 1, limit: 10 });

/**
 * 首页轮播图
 * @param {*} params 
 * @returns 
 */
export const getHomeBannerImgs = (params) => get('/information_manage/home_carousel/home_carousel_list', params);

/**
 * 首页要闻速递列表
 * @param {*} params 
 * @returns 
 */
export const getNewsExpressList = params => get('/information_manage/news_express/news_express_list', params)
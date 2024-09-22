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

/**
 * 留学重庆
 * @param {*} params 
 * @returns 
 */
export const getSchoolInfoList = params => get('/school_manage/school_info/school_info_list', params)

/**
 * 居留须知
 * @param {*} params 
 * @returns 
 */
export const getResidenceNoticeList = params => get('/information_manage/residence_notice/residence_notice_list', params)
/**
 * 签证提醒
 * @param {*} p
 * @returns
 */
export const remindInfoList = params => get("/remind_manage/remind_info/remind_info_list", params);

/**
 * 实习实训
 * @param {*} params 
 * @returns 
 */
export const getPositionInfoList = params => get("/employment_manage/position_info/position_info_list", params)

/**
 * 弹窗
 * @param {*} params 
 * @returns 
 */
export const getEmploymentGuideListDetail = params => get('/employment_manage/employment_guide/employment_guide_list_detail', params)

/**
 * 指南
 * @param {*} params 
 * @returns 
 */
export const getEmploymentGuideListDetai = params => get('/employment_manage/employment_guide/employment_guide_list_detail', params)

/**
 * 产品列表
 * @param {*} params 
 * @returns 
 */
export const getProductInfoList = params => get('/employment_manage/product_info/product_info_list', params)


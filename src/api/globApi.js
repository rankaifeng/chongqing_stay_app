import Taro from '@tarojs/taro';
import { get, post, postFile, put } from '../server/httpService';

/**
 * 登录验证
 * @param {*} data 
 * @returns 
 */
export const userLoginChange = data => post('/user_manage/user_login/country_passport_verify', data);

export const getStudentList = (params) => get('/user_manage/student_info/student_info_list', { page: 1, limit: 10 });
/**
 * 办事指南
 */
export const getActionGuideList = params => get("/information_manage/action_guide/action_guide_list", params)
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

/**
 * 企业列表
 * @param {*} params 
 * @returns 
 */
export const getEnterpriseInfoList = params => get('/employment_manage/enterprise_info/enterprise_info_list', params)

/**
 * 活动申请列表
 * @param {*} p
 * @returns
 */
export const tourismSubscribeList = params => get("/cultural_tourism_manage/cultural_tourism_subscribe/cultural_tourism_subscribe_list", params);

/**
 * 企业详情
 * @param {*} params 
 * @returns 
 */
export const getEnterpriseDetail = params => get('/employment_manage/enterprise_info/enterprise_info_list_detail', params)

/**
 * 查询聊天记录
 * @param {*} params 
 * @returns 
 */
export const getContactInfoListDetail = params => get('/contact_manage/contact_info/contact_info_list_detail', params)

/**
 * 新增聊天记录
 * @param {*} params 
 * @returns 
 */
export const contactInfoAdd = params => post('/contact_manage/contact_info/contact_info_add', params)
/**
 * 用户登录
 * @param {*} p
 * @returns
 */
export const getUserInfo = (p) => post("/user_manage/user_login/wechat_login", p);

/**
 * 文旅之窗
 * @param {*} p 
 * @returns 
 */
export const culturalTourismList = p => get('/cultural_tourism_manage/cultural_tourism/cultural_tourism_list', p)
/**
 * 小程序看到当前详情的状态
 * @param {*} p
 * @returns
 */
export const tourismListDetail = (p) => get("/cultural_tourism_manage/cultural_tourism/cultural_tourism_list_detail", p);

export const tourismSubscribeAdd = (p) => post("/cultural_tourism_manage/cultural_tourism_subscribe/cultural_tourism_subscribe_add", p);
/**
 * 文件上传
 * @param {*} p
 * @returns
 */
export const fileUpload = p => post('/base_manage/file_info/file_info_upload', p);

/**
 * 创新创业
 * @param {*} p
 * @returns
 */
export const innovationEntrepreneurship = (p) => post("/innovation_manage/approvement/approvement_add", p);
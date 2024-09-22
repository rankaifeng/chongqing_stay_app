import Taro from '@tarojs/taro';
import { get, post, postFile, put } from '../server/httpService';


export const getStudentList = (params) => get('/user_manage/student_info/student_info_list', { page: 1, limit: 10 });

export const getHomeBannerImgs = (params) => get('/information_manage/home_carousel/home_carousel_list', params);
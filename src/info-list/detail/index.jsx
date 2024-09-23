import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { Text, View, Video, RichText } from '@tarojs/components'
import './index.less'
import { tourismListDetail } from '../../api/globApi'

const btnArray = [
    { id: 1, value: '活动未开始', en: 'Not Yet Started', color: 'gray' },
    { id: 2, value: '活动已过期', en: 'Expired', color: 'gray' },
    { id: 3, value: '报名参与', en: 'Enrollment', color: '#2955AE' },
    { id: 4, value: '已报名', en: 'Enrolled', color: 'gray' },
    { id: 5, value: '无需报名', en: 'No Registration Required ', color: 'gray' }
]
const InfoListDetail = () => {

    const dataDetail = Taro.getCurrentInstance().preloadData.data

    const [str, setStr] = useState(undefined)

    const onApplication = str => {
        if (str.value === '报名参与') {
            Taro.navigateTo({ url: '/info-list/application/index' })
            Taro.preload({ data: dataDetail })
        }
    }

    useEffect(() => {
        tourismListDetail({ id: dataDetail.id }).then(res => {
            setStr(btnArray.filter(item => item.id === res.data)[0])
        })
    }, [])
    return (
        <View className='info-detail'>

            <View className='to'>
                <View className='detail-header'>
                    <View className='title'>{dataDetail.title}</View>
                    <View className='title-en'>{dataDetail.title_en}</View>

                    <View className='detail-bo'>
                        <View className='bo-left'>
                            <View className='b'>
                                <View>重庆国际文旅</View>
                                <View style={{ color: '#A6ABB3' }}>{dataDetail.update_time}</View>
                            </View>
                            <View className='b'>Chongqing International Cultural Tourism  </View>
                        </View>

                    </View>
                </View>
                <View style={{ whiteSpace: 'pre-wrap' }}>
                    <RichText nodes={dataDetail.description} />
                </View>
                {dataDetail.mark &&
                    <View className='detail-active'>
                        <View className='active-title'>
                            活动 · Maneuver
                        </View>
                        <View style={{ padding: "10rpx" }}> {dataDetail.mark}</View>
                        {/* <View>  2、鸿恩寺→观音桥步行街→北仓文创→九街。</View>
                        <View>  3、鹅岭二厂→李子坝轻轨站→动物园→涂鸦一条街。</View> */}
                    </View>
                }
            </View>
            {str && <View className='btn-b' style={{ background: str.color, display: str.value === '无需报名' ? 'none' : 'block' }}
                onClick={() => onApplication(str)}>{`${str.value} · ${str.en}`}</View>}
        </View>
    )
}
export default InfoListDetail;
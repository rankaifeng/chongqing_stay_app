import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Video, RichText, Image, ScrollView } from '@tarojs/components'
import './index.less'
import NavigationBar from '../../components/navigation-bar'
import { tourismListDetail } from '../../api/globApi'
import FlexTitle from '../../components/flex-title'

const btnArray = [
    { id: 1, value: '活动未开始', en: 'Not Yet Started', color: 'gray' },
    { id: 2, value: '活动已过期', en: 'Expired', color: 'gray' },
    { id: 3, value: '报名参与', en: 'Enrollment', color: '#2955AE' },
    { id: 4, value: '已报名', en: 'Enrolled', color: 'gray' },
    { id: 5, value: '无需报名', en: 'No Registration Required ', color: 'gray' }
]
const InfoListDetail = () => {

    const dataDetail = Taro.getCurrentInstance().preloadData.data
    const [opacity, setOpacty] = useState(1)
    const [showFlex, setShowFlex] = useState(false)
    const [str, setStr] = useState(undefined)

    const onApplication = str => {
        if (str.value === '报名参与') {
            Taro.navigateTo({ url: '/info-list/application/index' })
            Taro.preload({ data: dataDetail })
        }
    }
    useEffect(() => {
        tourismListDetail({ id: dataDetail.id }).then(res => {
            if (res.code === 0) {
                Taro.showToast({ title: res.msg, icon: 'none' })
            }
            setStr(btnArray.filter(item => item.id === res.data)[0])
        })
    }, [])
    const onScrollBind = (e) => {
        if (e.detail.scrollTop > 200) {
            setShowFlex(true)
        } else {
            if (e.detail.scrollTop <= 10) {
                setShowFlex(false)
            }
            setOpacty(1 - e.detail.scrollTop / 200);
        }
    }
    return (
        <ScrollView scrollY className='info-detail' onScroll={onScrollBind}>
            {showFlex ? <FlexTitle title="详情" /> : <NavigationBar isBackIcon={true} backIconColor='#fff' />}
            <Image mode='aspectFill' src={dataDetail?.cover_image} style={{ height: "220px", opacity: opacity }} className='img-t' />
            <View className='to'>
                <View className='to-title'>重庆文旅城</View>
                <View className='to-bom'>
                    <View className='bom-left'>Chongqing International Cultural Tourism</View>
                    <View className='bom-right'>2023-12-23 12:23:34</View>
                </View>

                <View className='detail-des'>
                    <RichText nodes={dataDetail.description} />
                </View>
                {dataDetail.mark && <View className='acti'>
                    <RichText nodes={dataDetail.mark} />
                </View>}
            </View>
            {str && <View className='acti-btn' style={{ background: str.color, display: str.value === '无需报名' ? 'none' : 'block' }}
                onClick={() => onApplication(str)}>{`${str.value} · ${str.en}`}</View>}
        </ScrollView>
    )
}
export default InfoListDetail;
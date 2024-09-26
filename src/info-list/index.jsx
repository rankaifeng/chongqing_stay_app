import React, { useState, useEffect } from 'react'
import { Image, View } from '@tarojs/components'
import { Tabs, Tab } from '@antmjs/vantui'
import NavigationBar from '../components/navigation-bar'
import './index.less'
import RefreshList from '../components/refresh-list'
import { culturalTourismList } from '../api/globApi'
import Taro from '@tarojs/taro'
import BgTitle from '../components/bg-title'
const InfoList = () => {

    const [isLoad, setIsLoad] = useState(false)
    const [datas, setDatas] = useState([{ name: '热点推荐', en: 'Recommended' }, { name: '活动报名', en: 'Event Registration' }])
    const [otherData, setOtherData] = useState({
        list_status: 1,
        cultural_type: 1
    })
    const [title, setTitle] = useState('热点推荐')
    const onItemClick = item => {
        setTitle(item.name)
        setOtherData({
            list_status: 1,
            cultural_type: item.name === '热点推荐' ? 1 : 2
        })
    }
    const onDateDetail = item => {
        if (!Taro.getStorageSync('token')) {
            Taro.navigateTo({ url: '/user-login/index' })
        } else {
            Taro.preload({ data: item })
            Taro.navigateTo({ url: '/info-list/detail/index' })
        }

    }

    return (
        <View className='info'>
            <NavigationBar title='文旅之窗' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
            <View className='info-list'>
                <View className='title'>
                    {/* <View className="tab-item tab-selected">
                        <View className="tab-label">水电费是的</View>
                    </View>
                    <View className="tab-item not-selected">
                        <View className="tab-label">水电费是的</View>
                    </View> */}
                    {datas.map(item => {
                        return (
                            <View onClick={() => onItemClick(item)} className={`tab-item ${title === item.name ? 'tab-selected' : 'not-selected'}`}>
                                <View className="tab-label">
                                    {title === item.name ? <BgTitle title={item.name} size='28rpx' /> : <View className='tab-ch1'>{item.name}</View>}
                                    <View className='tab-en1'>{item.en}</View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View className='list-content'>
                    <RefreshList
                        getList={culturalTourismList}
                        isLoad={isLoad}
                        setIsLoad={setIsLoad}
                        otherData={otherData}
                        renderItem={(item, index) => {
                            return (
                                <View className='info-item list-item' onClick={() => onDateDetail(item)}>
                                    <View className='info-title'>{item.title}</View>
                                    <View className='title-en'>{item.title_en}</View>
                                    <View className='info-bg'>
                                        <Image mode='aspectFill' className='info-img' src={item.cover_image} />
                                        {item.short_dpt &&
                                            <View className='info-mark'>
                                                <View className='mark1'>{item.short_dpt}</View>
                                                <View className='mark1'>{item.short_dpt_en}</View>
                                            </View>}
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
export default InfoList;
import React, { useState, useEffect } from 'react'
import { Image, View } from '@tarojs/components'
import { Tabs, Tab } from '@antmjs/vantui'
import NavigationBar from '../components/navigation-bar'
import './index.less'
import RefreshList from '../components/refresh-list'
import { culturalTourismList } from '../api/globApi'
import Taro from '@tarojs/taro'
const InfoList = () => {

    const [isLoad, setIsLoad] = useState(false)
    const [datas, setDatas] = useState([{ name: '热点推荐' }, { name: '活动报名' }])
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
        Taro.preload({ data: item })
        Taro.navigateTo({ url: '/info-list/detail/index' })
    }

    return (
        <View className='info'>
            <NavigationBar title='文旅之窗' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
            <View className='info-list'>
                <View className='title'>
                    {datas.map(item => {
                        return (
                            <View onClick={() => onItemClick(item)} className={`one ${title === item.name ? 'active' : 'two'}`}>
                                {item.name}
                                <View></View>
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
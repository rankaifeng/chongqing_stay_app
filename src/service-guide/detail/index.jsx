import { RichText, View } from '@tarojs/components'
import React from 'react'
import './index.less'
import Taro from '@tarojs/taro'
import NavigationBar from '../../components/navigation-bar';
export default function ServiceGuideDetail() {
    const dataDetail = Taro.getCurrentInstance().preloadData.itemData;

    return (
        <View className='service-guide'>
            <NavigationBar title='详情' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

            <View className='service-guide-content'>
                <RichText nodes={dataDetail.description} />
            </View>
        </View>
    )
}

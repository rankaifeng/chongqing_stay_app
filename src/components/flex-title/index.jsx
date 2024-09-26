import { Text, View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import './index.less'
import Taro from '@tarojs/taro';
import { Icon } from '@antmjs/vantui';
export default function FlexTitle({ title }) {
    const [navBarHeight, setNavBarHeight] = useState(0);
    let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
    useEffect(() => {
        getNavHeight();
    }, []);

    const getNavHeight = () => {
        var sysinfo = Taro.getSystemInfoSync();
        let statusBarHeight = sysinfo.statusBarHeight;
        let menuBottonHeight = menuButtonObject.height;
        let menuBottonTop = menuButtonObject.top;
        let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2;
        setNavBarHeight(navBarHeight);
    };
    return (
        <View className='flex-title' style={{ height: ` ${navBarHeight}px` }}>
            <Icon
                onClick={()=>Taro.navigateBack({ delta: 1 })}
                style={{ marginTop: `${menuButtonObject.height}px` }}
                color='#000'
                name='arrow-left'
                size='22px'
            />
            <Text style={{ color: '#000', fontWeight: "600", marginTop: `${menuButtonObject.height}px` }}>
                {title}
            </Text>
            <View style={{ visibility: 'hidden' }}></View>
        </View>
    )
}

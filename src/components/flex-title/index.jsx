import { Icon, Text, View } from '@tarojs/components'
import React from 'react'
import './index.less'
export default function FlexTitle({ title }) {
    return (
        <View className='flex-title'>
            <Icon
                color='#000'
                name='arrow-left'
                size='22px'
            />
            <Text style={{ color: '#000', fontWeight: "600" }}>
                {title}
            </Text>
            <View style={{visibility: 'hidden'}}></View>
        </View>
    )
}

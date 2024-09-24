import { Image, Text, View } from '@tarojs/components'
import React from 'react'
import './index.less'

export default function Chart() {
    return (
        <View class="chat-container">
            <View class="message sent">
                <View className='time'>2023-01-01 12:22:22</View>
                <Image className='sent-img' src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <View class="content">

                    <Text>Hello</Text>
                </View>
            </View>
            <View class="message sent">
                <View className='time'>2023-01-01 12:22:22</View>
                <Image className='sent-img' src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <View class="content">

                    <Text>Hello</Text>
                </View>
            </View>
            <View class="message received">
                <View className='time'>2023-01-01 12:22:22</View>
                <View class="content">
                    <Text>I'm fine, thanks for asking!</Text>
                </View>
                <Image className='received-img' src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </View>

            <View class="message received">
                <View className='time'>2023-01-01 12:22:22</View>
                <View class="content">
                    <Text>I'm fine, thanks for asking!</Text>
                </View>
                <Image className='received-img' src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </View>
        </View>
    )
}

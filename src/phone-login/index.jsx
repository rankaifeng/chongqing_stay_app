import { View, Image, Button } from '@tarojs/components'
import React, { useState } from 'react'
import './index.less'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import weImg1 from '../imgs/icon.png'
import { getUserInfo } from '../api/globApi'
const PhoneLogin = () => {

    const [weCode, setWeCode] = useState('')

    useEffect(() => {
        Taro.login({ success: res => setWeCode(res.code) })
    }, [])

    const onUserInfo = (e) => {
        const { encryptedData, iv } = e.detail;
        if (e.detail.errMsg === 'getPhoneNumber:fail user deny') {
            Taro.showModal({
                title: '温馨提示',
                content: '需要授权才能进入,请重新点击允许授权!',
                showCancel: false
            })
            return;
        }
        getUserInfo({ code: weCode, encrypted_data: encryptedData, iv }).then(res => {
            if (res.code === 0) {
                Taro.showToast({ title: res.msg, icon: 'none' })
                Taro.login({ success: res => setWeCode(res.code) })
                return;
            }
            Taro.setStorageSync("token", res.data.token)
            Taro.setStorageSync("region", JSON.stringify(res.data.region_name_arr))
            Taro.setStorageSync("userInfo", JSON.stringify(res.data))
            Taro.showToast({ title: '登录成功', icon: 'none' })
            setTimeout(() => {
                Taro.switchTab({ url: '/pages/home/index' })
            }, 1000);
        })
    }

    return (
        <View className="container">
            <View className='logo'>
                <Image className='weImg' src={weImg1} />
                <View style={{ color: 'gray' }}>悦留重庆</View>
            </View>
            <Button className='center-btn' type='primary' openType='getPhoneNumber' onGetPhoneNumber={onUserInfo}>
                一键登录
            </Button>
        </View>
    )
}
export default PhoneLogin;

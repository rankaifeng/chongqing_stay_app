import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Textarea, Picker } from '@tarojs/components'
import './index.less'
import { tourismSubscribeAdd } from '../../api/globApi'
import NavigationBar from '../../components/navigation-bar'


const InfoAapplication = () => {

    const userInfo = Taro.getStorageSync("userInfo")
    const dataDetail = Taro.getCurrentInstance().preloadData.data
    const [dataList, setDataList] = useState([])
    const [name, setName] = useState(undefined)
    const [phone, setPhone] = useState(undefined)
    const [carNumber, setCarNumber] = useState(undefined)
    const [dateStr, setDateStr] = useState(undefined)
    const [mark, setMark] = useState(undefined)

    useEffect(() => {
        if (userInfo) {
            const mUserInfo = JSON.parse(userInfo)
            setName(mUserInfo.student_name)
            setPhone(mUserInfo.student_phone)
            setCarNumber(mUserInfo.id_number)
        }
        setDataList(dataDetail.data_list.split(','))
    }, [])


    const onSubmitInfo = () => {
        if (!dateStr) {
            Taro.showToast({ title: '参加日期不能为空', icon: 'none' })
            return;
        }
        if (!mark) {
            Taro.showToast({ title: '备注不能为空', icon: 'none' })
            return;
        }
        tourismSubscribeAdd({ id: dataDetail.id, participation_time: new Date(dateStr).getTime() / 1000, mark }).then(res => {
            Taro.showToast({ title: res.msg, icon: 'none' })
            if (res.code === 1) {
                Taro.showToast({ title: res.msg, icon: 'none' })
                setTimeout(() => {
                    Taro.navigateBack({ delta: 2 })
                }, 500);
            }
        })
    }
    return (
        <View className='ship'>
            <NavigationBar title='报名' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

            <View className='top'>
                <View className='ship-date'>
                    <View className='date-title'>姓名 · Name</View>
                    <Input disabled value={name} onInput={v => setName(v.detail.value)} placeholder='请输入姓名 Please enter your name' />
                    <View className='date-title'>证件号码 · Certificate Number</View>
                    <Input disabled value={carNumber} onInput={v => setCarNumber(v.detail.value)} placeholder='请输入证件号码 Please enter your ID number' />
                    <View className='date-title'>电话号码 · Phone Number</View>
                    <Input disabled value={phone} onInput={v => setPhone(v.detail.value)} placeholder='请输入电话号码 Please enter your phone number' />
                    <View className='date-title'>参加日期 · Participation Date </View>
                    <Picker mode='selector' range={dataList} onChange={e => setDateStr(dataList[e.detail.value])}>
                        <Input disabled value={dateStr} placeholder='请选择日期 Please select a date' />
                    </Picker>
                </View>

                <View className='ship-mark'>
                    <View className='date-title'>备注 · Note</View>
                    <Textarea style={{ height: '100px' }} placeholder='请输入备注......' onInput={v => setMark(v.detail.value)} />
                </View>

            </View>

            <View className='sub' onClick={onSubmitInfo}>确认提交 · Submit</View>

        </View>
    )
}

export default InfoAapplication;
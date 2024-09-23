import React, { useEffect, useState } from 'react'
import { culturalTourismList } from '../../api/globApi'
import { Text, View } from '@tarojs/components';
import Bgtitle from '../../components/bg-title'
import ImgContent from '../../components/img-content'
import Taro from '@tarojs/taro';
export default function Window() {

    const [windows, setWindows] = useState([])
    useEffect(() => {
        culturalTourismList({ list_status: 1, page: 1, limit: 1 }).then(res => {
            setWindows(res.data)
        })
    }, [])

    const onWindowClick = () => { Taro.navigateTo({ url: "/info-list/index" }) }
    return (
        <>
            {windows && windows.length ? <>
                <View className='t'>
                    <Bgtitle title='文旅之窗' size='18px' />
                    <Text>·Window on Culture and Tourism</Text>
                </View>
                {windows.map(item => {
                    return <ImgContent onClick={onWindowClick} imgUrl={item.cover_image} title={item.short_dpt} time={item.update_time} />
                })}
            </> : null}

        </>
    )
}

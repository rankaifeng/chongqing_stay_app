import { Text, View, Image } from '@tarojs/components'
import Taro, { usePullDownRefresh } from '@tarojs/taro'
import React, { useState, useEffect } from 'react'
import MyLoading from '../my-loading'
import './index.less'
import { Empty } from '@antmjs/vantui'

export default function ScrollViewList({
    getList,
    type,
    param,
    onDateDetail,
    current,
    param1
}) {
    const [page, setPage] = useState(1)
    const [refresher, setRefresher] = useState(false)
    const [startY, setStartY] = useState(0)
    const [isLoading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [isLoad, setLoad] = useState(false)
    const [total, setTotal] = useState(0)
    const [height, setHeight] = useState('')

    useEffect(() => {
        if (refresher) {
            setLoading(true)
            setPage(1)
            requestData({ page: 1, limit: 10 })
        }
    }, [refresher])

  

    useEffect(() => {
        if (page !== 1)
            requestData()
    }, [page])

    useEffect(() => {
        setRefresher(true)
        if (type === 'zhuxue' || type === 'active') {
            setHeight('98vh')
        } else if (type === 'socia') {
            setHeight('90vh')
        } else {
            setHeight('89vh')
        }
    }, [])
    /**
         * 下拉刷新
         */
    usePullDownRefresh(() => {
        setLoading(true)
        setDatas([])
        setRefresher(true)
    })


    const requestData = (data = { page: page, limit: 10 }) => {
        // setDatas([])
        if (!isLoad && !refresher) {
            setLoading(true)
        }
        getList({ ...param, ...data, ...param1 })
            .then(res => {
                if (res && res.code === 1) {
                    if (res.data) {
                        if (refresher) {
                            setDatas(res.data)
                            setRefresher(false)
                            Taro.stopPullDownRefresh()
                        } else {
                            setDatas(datas.concat(res.data));
                            setLoad(false)
                        }
                        setTotal(res.num)
                    } else {
                        Taro.showToast({ title: res.msg, icon: 'none' })
                    }
                }
            }).finally(() => setLoading(false))
    }

    const reachBottom = () => {
        if (total > 10) {
            setLoad(true)
            setRefresher(false)
            setTimeout(() => {
                setPage(page + 1)
            }, 1000);
        }
    }

    const returnHtml = (item, index) => {
        return <View>
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
        </View>
    }
    
    return (
        <View onTouchEnd={e => {
            let end = e.changedTouches[0].pageY;
            let disan = startY - end
            if (disan > 100) {
                reachBottom()
            }
        }}
            onTouchStart={e => {
                setStartY(e.changedTouches[0].pageY);
            }}
            style={{ position: 'relative', height: height, overflowY: 'auto', background: '#efefef' }}>

            {isLoading ? <MyLoading type={type} /> : <View>
                {datas && datas.length ? datas.map((item, index) => {
                    return (
                        <View key={index}>
                            {returnHtml(item, index)}
                        </View>
                    )
                }) : null}
                {isLoad && <View className='load'>
                    <View class="spinner">
                        <View class="bounce1"></View>
                        <View class="bounce2"></View>
                        <View class="bounce3"></View>
                    </View>
                </View>
                }
                {!datas || datas.length === 0 && <Empty />}
            </View>}
        </View>
    )
}
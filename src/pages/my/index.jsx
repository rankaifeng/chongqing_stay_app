import { Text, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import Image from "@antmjs/vantui/es/image";
import Icon from "@antmjs/vantui/es/icon";
import BgTitle from "../../components/bg-title";
import zy from "../../imgs/zy.svg";
import xy from "../../imgs/xy.svg";
import Taro from "@tarojs/taro";
export default function My() {

	const [userInfo, setUserInfo] = useState(undefined)
	useEffect(() => {
		const mUser = Taro.getStorageSync('userInfo')
		if (mUser) {
			setUserInfo(JSON.parse(mUser))
		} else {
			Taro.navigateTo({ url: '/user-login/index' })
		}
	}, [])

	function calculateDays(startTimestamp) {
		const timestamp = Math.floor(Date.now() / 1000);
		const oneDay = 24 * 60 * 60; // 一天的毫秒数
		// 计算天数
		const daysDifference = Math.floor((timestamp - startTimestamp) / oneDay);
		return daysDifference + 2;
	}
	return (
		<View className='my'>
			<View className='my-content'>
				<NavigationBar leftTitle='个人中心' />
				<View className='my-top'>
					<Text className='name' onClick={() => Taro.navigateTo({ url: '/user-login/index' })}>{userInfo?.student_name} {Taro.getStorageSync('token') ? null : [点击登录]}</Text>
					<Text className='day'>加入悦留学重庆第 {userInfo?.create_time ? calculateDays(userInfo?.create_time) : 0} 天</Text>
					<Image className='avatar' src={userInfo?.head_url || 'https://img.yzcdn.cn/vant/cat.jpeg'} round />
				</View>

				<View className='student-info'>
					<BgTitle title='学生信息' />

					<View className='info-content'>
						<View className='info-item'>
							<Text className='xy'>学院·Colleges</Text>
							<Text className='xy-name'>{userInfo?.school_college}</Text>
							<Image
								src={xy}
								style={{
									width: "33.5px",
									height: "21px",
									position: "absolute",
									right: 0,
									bottom: 0,
								}}
							/>
						</View>
						<View className='info-item ml'>
							<Text className='xy'>专业·Professions</Text>
							<Text className='xy-name'>{userInfo?.school_speciality}</Text>
							<Image
								src={zy}
								style={{
									width: "33.5px",
									height: "21px",
									position: "absolute",
									right: 0,
									bottom: 0,
								}}
							/>
						</View>
					</View>
				</View>

				<View className='server'>
					<BgTitle title='服务功能' />
				</View>

				<View className='active' onClick={() => Taro.navigateTo({ url: "/active-record/index" })}>
					<View className='active-item'>
						<View className='active-svg' />
						活动申请记录·Event Application Record
					</View>
					<Icon name='arrow' size='16px' style={{ marginRight: "10px" }} />
				</View>

				<View className='exit' onClick={() => {
					Taro.reLaunch({ url: "/user-login/index" })
				}}>退出账号·Abort</View>
			</View>
		</View>
	);
}

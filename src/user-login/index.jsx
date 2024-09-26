import { Button, Image, Text, View } from "@tarojs/components";
import React, { useRef, useState } from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import teBgImg from "../imgs/te-bg.svg";
import pBgImg from "../imgs/login-b.png";
import BgTitle from "../components/bg-title";
import { Checkbox, Field, Radio } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { userLoginChange } from "../api/globApi";
export default function UserLogin() {
	const [value, setValue] = useState(false);
	const [countryName, setCountryName] = useState(undefined);
	const [idNumber, setIDNumber] = useState(undefined)



	const onUserLogin = (e) => {
		if (!value) {
			Taro.showToast({ title: "请先同意隐私协议", icon: 'none' });
			return;
		}
		if (!countryName) {
			Taro.showToast({ title: "请选择国籍", icon: 'none' });
			return;
		}
		if (!idNumber) {
			Taro.showToast({ title: "请输入护照号", icon: 'none' });
			return;
		}
		userLoginChange({
			country_name: countryName,
			id_number: idNumber
		}).then(res => {
			Taro.showToast({ title: res.msg, icon: 'none' })
			if (res.code === 1) {
				Taro.navigateTo({ url: '/phone-login/index' })
			}
		})
	}
	return (
		<View className='login'>
			<NavigationBar isWeight={600} title='悦留重庆' titleColor='#000' isBackIcon={true} backIconColor='#000' />
			<View className="login-bg">
				<View className="h">Hello!</View>
				<View className="w">欢迎来到悦留重庆</View>
				<View className="en">Welcome to Yueliu Chongqing</View>
			</View>
			<Image src={pBgImg} className='te-p' style={{ width: "281px", height: "260px", position: 'absolute',right:'-20%',top:'8%' }} />

			<View className='login-c'>
				<BgTitle title='国籍' size='18px' />
				<Text className='login-c-text'>·Citizenship</Text>
				<Field onChange={e => setCountryName(e.detail)} border={false} placeholder='请输入国籍·Please select nationality' />

				<View className='login-c-item'>
					<BgTitle title='护照号' size='18px' />
					<Text className='login-c-text'>·Passport Number</Text>
					<Field onChange={e => setIDNumber(e.detail)} border={false} placeholder='请输入国籍·Please select nationality' />
				</View>

				<Button className='login-btn' onClick={onUserLogin} >一键登录·Login</Button>
			</View>
			<View className='login-bottom'>
				<View className='login-radio'>
					<Checkbox value={value} onChange={(e) => setValue(e.detail)} />
					我已阅读
					<Text onClick={() => Taro.navigateTo({ url: "/privacy/index" })} className='bc'>
						用户协议
					</Text>
					和
					<Text className='bc' onClick={() => Taro.navigateTo({ url: "/privacy/index" })}>
						隐私协议
					</Text>
				</View>
				<View>I have read the User Agreement and Privacy Agreement</View>
			</View>
		</View>
	);
}

import { Image, Text, View } from "@tarojs/components";
import React, { useState } from "react";
import NavigationBar from "../../components/navigation-bar";
import "./index.less";
import teBgImg from "../../imgs/te-bg.svg";
import pBgImg from "../../imgs/p-bg.png";
import BgTitle from "../../components/bg-title";
import { Checkbox, Field, Radio } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function Login() {
	const [value, setValue] = useState(false);

	return (
		<View className='login'>
			<NavigationBar leftTitle='悦留重庆' />
			<Image src={teBgImg} className='te-bg' style={{ width: "176px", height: "124px" }} />
			<Image src={pBgImg} className='te-p' style={{ width: "172px", height: "164px" }} />

			<View className='login-c'>
				<BgTitle title='国籍' size='18px' />
				<Text className='login-c-text'>·Citizenship</Text>
				<Field border={false} placeholder='请输入国籍·Please select nationality' />

				<View className='login-c-item'>
					<BgTitle title='护照号' size='18px' />
					<Text className='login-c-text'>·Passport Number</Text>
					<Field border={false} placeholder='请输入国籍·Please select nationality' />
				</View>

				<View className='login-btn'>一键登录·Login</View>
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

import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Icon, Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function CompanyInfo({ type }) {
	return (
		<View className='item-company' onClick={() => Taro.navigateTo({ url: "/company-detail/index" })}>
			<Image round width='40px' height='40px' src='https://img.yzcdn.cn/vant/cat.jpeg' />
			<View className='company-info'>
				<View className='company-name'>重庆寰旭科技有限公司</View>
				<View className='company-address'>
					<View className='company-address-desc'>Chongqing Huanxu Technology Co.</View>
					<View className='company-address-text'>
						{type ? <Icon name='arrow' size={30} /> : "渝北区·观音桥"}
					</View>
				</View>
			</View>
		</View>
	);
}

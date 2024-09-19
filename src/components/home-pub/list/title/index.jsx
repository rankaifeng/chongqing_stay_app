import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Icon } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function ListTitle() {
	return (
		<View className='list-title' onClick={() => Taro.navigateTo({ url: "/page-service-guide/index" })}>
			<View className='title-bg' style={{ height: "80px" }}>
				办事指南·Clerical Guidelines
			</View>
			<View className='title-content'>
				<View className='title-content-left'>
					<Icon name='fail' size={30} color='#a6a6a6' />
				</View>
				<View className='title-content-right'>
					<View>学生可查看办事相关指南</View>
					<View className='des'>Students can view the guide related to the office</View>
				</View>
				<Icon className='right-icon' name='arrow' size={30} color='#a6a6a6' />
			</View>
		</View>
	);
}

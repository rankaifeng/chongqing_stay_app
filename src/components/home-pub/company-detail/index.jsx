import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import NavigationBar from "../../navigation-bar";
import { Icon, Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function CompanyDetail() {
	return (
		<View className='company-detail'>
			<NavigationBar title='公司详情' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='company-detail-content'>
				<View className='company-name-title'>
					<Image round width='40px' height='40px' src='https://img.yzcdn.cn/vant/cat.jpeg' />
					<View className='company-name'>
						<Text className='name'>重庆寰旭科技有限公司</Text>·Chongqing Huanxu Technology Co.
					</View>
				</View>
				<View className='location'>
					<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
					<Text>渝北区·观音桥</Text>
				</View>
				<View className='company-border' />

				<View className='show-html'></View>
			</View>
		</View>
	);
}

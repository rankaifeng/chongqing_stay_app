import { RichText, Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import NavigationBar from "../../navigation-bar";
import { Icon, Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function CompanyDetail() {
	//获取路由参数
	const mP = Taro.getCurrentInstance().router.params;
	return (
		<View className='company-detail'>
			<NavigationBar title='公司详情' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='company-detail-content'>
				<View className='company-name-title'>
					<Image round width='40px' height='40px' src={mP?.logo} />
					<View className='company-name'>
						<Text className='name'>{mP?.name}</Text>·Chongqing Huanxu Technology Co.
					</View>
				</View>
				<View className='location'>
					<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
					<Text>{mP?.location}</Text>
				</View>
				<View className='company-border' />

				<View className='show-html'>
					<RichText nodes={mP.title === "产品详情" ? mP?.enterpriseDes : mP?.enterpriseIntroduce} />
				</View>
			</View>
		</View>
	);
}

import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Icon, Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function CompanyInfo({ type, name, location, logo, enterpriseIntroduce, title, enterpriseDes }) {
	return (
		<View
			className='item-company'
			onClick={() =>
				Taro.navigateTo({
					url: `/company-detail/index?name=${name}&location=${location}&logo=${logo}&enterpriseIntroduce=${enterpriseIntroduce}&title=${title}&enterpriseDes=${enterpriseDes}`,
				})
			}>
			<Image round width='40px' height='40px' src={logo} />
			<View className='company-info'>
				<View className='company-name'>{name}</View>
				<View className='company-address'>
					<View className='company-address-desc'>Chongqing Huanxu Technology Co.</View>
					<View className='company-address-text'>{type ? <Icon name='arrow' size={30} /> : location}</View>
				</View>
			</View>
		</View>
	);
}

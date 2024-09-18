import { Text, View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import { Icon } from "@antmjs/vantui";
export default function ServiceGuide() {
	return (
		<View className='service-guide'>
			<NavigationBar title='办事指南' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
			<View className='service-guide-item'>
				<View className='item-left'>
					<View className='left-title'>全国通申请办理指南</View>
					<View className='left-desc'>Guide to applying for a nationwide pass</View>
				</View>
				<Icon name='arrow' size='20px' color='rgba(156, 156, 156, 1)' />
			</View>
			<View className='service-guide-item'>
				<View className='item-left'>
					<View className='left-title'>全国通申请办理指南</View>
					<View className='left-desc'>Guide to applying for a nationwide pass</View>
				</View>
				<Icon name='arrow' size='20px' color='rgba(156, 156, 156, 1)' />
			</View>
			<View className='service-guide-item'>
				<View className='item-left'>
					<View className='left-title'>全国通申请办理指南</View>
					<View className='left-desc'>Guide to applying for a nationwide pass</View>
				</View>
				<Icon name='arrow' size='20px' color='rgba(156, 156, 156, 1)' />
			</View>
		</View>
	);
}

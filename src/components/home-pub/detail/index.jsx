import { Text, View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../../navigation-bar";
import "./index.less";
import { Icon } from "@antmjs/vantui";
import CompanyInfo from "../company-info";
export default function JobPageDetail({ title, des, desEn }) {
	return (
		<View className='job-detail'>
			<NavigationBar title={title} isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='job-detail-content'>
				<View className='j-t'>
					<Text className='jt-1'>{des}</Text>·{desEn}
				</View>
				<View className='location'>
					<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
					<Text>渝北区·观音桥</Text>
				</View>
				<View className='c-c'>
					<CompanyInfo type='location' />
				</View>
				<View className='c-c-html'></View>
			</View>
		</View>
	);
}

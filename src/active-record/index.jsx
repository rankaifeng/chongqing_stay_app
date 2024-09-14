import { View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../components/navigation-bar";
import './index.less'
export default function ActiveRecord() {
	return (
		<View className='active-record'>
			<NavigationBar title='活动申请记录' isBackIcon={true} />
		</View>
	);
}

import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
export default function StatusBtn({ status }) {
	return (
		<View className='status-btn'>
			{status === 1 && <View className='status-under-review'>审核中·Under Review</View>}
			{status === 2 && <View className='status-pass'>通过·Pass</View>}
			{status === 3 && <View className='status-fail'>拒绝·Fail</View>}
		</View>
	);
}

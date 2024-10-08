import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
export default function StatusBtn({ status }) {
	return (
		<View className='status-btn'>
			{status === 1 && <View className='status-under-review'>通过·Pass</View>}
			{status === 2 && <View className='status-pass'>拒绝·Reject</View>}
			{status === 3 && <View className='status-fail'>审核中·Under Review</View>}
		</View>
	);
}

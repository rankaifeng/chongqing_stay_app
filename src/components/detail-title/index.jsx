import { Ellipsis, Image } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
export default function DetailTitle({ imgUrl, title }) {
	return (
		<View className='detail-title'>
			<Image round width='50px' height='50px' src={imgUrl || "https://img.yzcdn.cn/vant/cat.jpeg"} />

			<View className='detail-title-info'>
				<View className='detail-title-content'>{title}</View>
				<View className='detail-time'>2024-01-12</View>
			</View>
		</View>
	);
}

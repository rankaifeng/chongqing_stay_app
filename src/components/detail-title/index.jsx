import { Ellipsis, Image } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
export default function DetailTitle() {
	return (
		<View className='detail-title'>
			<Image round width='50px' height='50px' src='https://img.yzcdn.cn/vant/cat.jpeg' />

			<View className="detail-title-info">
				<View className='detail-title-content'>
					就是大家放松的垃圾士大就是大家放松的垃圾士大夫似的士大夫似的就是大家放松的垃圾士大夫似的士大夫似的夫似的士大夫似的
				</View>
				<View className='detail-time'>2024-01-12</View>
			</View>
		</View>
	);
}

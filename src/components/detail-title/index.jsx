import { Ellipsis, Icon, Image } from "@antmjs/vantui";
import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
export default function DetailTitle({ imgUrl, title, position }) {
	return (
		<View className='detail-title'>
			<Image round width='50px' height='50px' src={imgUrl || "https://img.yzcdn.cn/vant/cat.jpeg"} />

			<View className='detail-title-info'>
				<View className='detail-title-content'>{title}</View>
				{position ? (
					<View className="position">
						<Icon color='rgba(166, 166, 166, 1)' name='location-o' size={30} />
						<Text className="position-text">{position}</Text>
					</View>
				) : (
					<View className='detail-time'>2024-01-12</View>
				)}
			</View>
		</View>
	);
}

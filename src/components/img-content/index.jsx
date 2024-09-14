import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Ellipsis, Image } from "@antmjs/vantui";
export default function ImgContent() {
	return (
		<View className='img-content'>
			<Image round radius={10} className='imgs' src='https://img.yzcdn.cn/vant/cat.jpeg' />
			<View className='left'>
				<Ellipsis rows={2} hiddenAction className="el">
					就是大家放松的垃圾士大就是大家放松的垃圾士大夫似的士大夫似的就是大家放松的垃圾士大夫似的士大夫似的夫似的士大夫似的
				</Ellipsis>
				<View className="time">2024-02-12</View>
			</View>
		</View>
	);
}

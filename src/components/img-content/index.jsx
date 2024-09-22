import { Image, Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Ellipsis } from "@antmjs/vantui";
export default function ImgContent({ onClick, imgUrl, title, time }) {
	return (
		<View className='img-content' onClick={onClick}>
			<Image mode='aspectFill' className='imgs' src={imgUrl || "https://img.yzcdn.cn/vant/cat.jpeg"} />
			<View className='left'>
				<View className='el ellipsis2'>{title}</View>
				<View className='time'>{time}</View>
			</View>
		</View>
	);
}

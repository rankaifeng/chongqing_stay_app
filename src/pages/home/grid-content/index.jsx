import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function GridTitleContent({ datas, type }) {
	function splitStringByLength(str, length) {
		const result = [];
		for (let i = 0; i < str.length; i += length) {
			result.push(str.slice(i, i + length));
		}
		return result;
	}

	return (
		<View className='grid-content1' style={{ paddingBottom: type ? "50rpx" : "30rpx" }}>
			{datas.map((item) => {
				return (
					<View className='grid-item' onClick={() => Taro.navigateTo({ url: item.path })}>
						<View className='grid-c' style={{ background: item.bg }}>
							<Image width='30px' height='30px' src={item.icon} />
						</View>
						<Text className='grid-t'>{item.title}</Text>
						<Text className='grid-t12' style={{ bottom: "-8px" }}>
							{item.eg}
						</Text>
					</View>
				);
			})}
		</View>
	);
}

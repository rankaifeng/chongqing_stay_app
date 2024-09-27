import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function GridContent({ datas, type }) {
	function splitStringByLength(str, length) {
		const result = [];
		for (let i = 0; i < str.length; i += length) {
			result.push(str.slice(i, i + length));
		}
		return result;
	}

	return (
		<View className='grid-content' style={{ paddingBottom: type ? "50rpx" : "30rpx" }}>
			{datas.map((item) => {
				let mT;
				if (item.title.length > 4) {
					mT = splitStringByLength(item.title, 4);
				} else {
					mT = item.title;
				}
				return (
					<View className='grid-item' onClick={() => Taro.navigateTo({ url: item.path })}>
						<View className='grid-c' style={{ background: item.bg }}>
							<Image width='30px' height='30px' src={item.icon} />
						</View>
						<Text className='grid-t'>{item.title.length > 4 ? mT[0] : mT}</Text>
						<Text style={{ visibility: item.title.length > 4 ? "visible" : "hidden", color: '#333333', fontSize: '26rpx' }}>{mT[1]}</Text>
						{item.bottom == 0 ? <Text className='grid-t1' style={{ bottom: 0 }}>
							{item.eg}
						</Text> : <Text className='grid-t1 ellipsis2' style={{ bottom: item.title.length > 4 ? "-10px" : "-8px" }}>
							{item.eg}
						</Text>}

					</View>
				);
			})}
		</View>
	);
}

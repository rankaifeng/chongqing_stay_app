import React from "react";
import "./index.less";
import { Image, RichText, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
export default function StudaySchoolItem({ item }) {
	return (
		<View
			className='studay-school-item'
			onClick={() => {
				Taro.preload({ itemData: item });
				Taro.navigateTo({ url: "/studay-chongqing/detail/index" });
			}}>
			<Image className='item-img' round mode='aspectFill' src={item?.logo} />
			<View className='item-right'>
				<View className='right-name'>{item?.school_name}</View>
				<RichText className='right-des' nodes={item?.description} />
			</View>
		</View>
	);
}

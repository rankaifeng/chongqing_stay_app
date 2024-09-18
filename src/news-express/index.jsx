import { View } from "@tarojs/components";
import React from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import ImgContent from "../components/img-content";
import Taro from "@tarojs/taro";
export default function NewsExpress() {
	return (
		<View className='news-express'>
			<NavigationBar title='要闻速递' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
			<View className='news-express-content'>
				<ImgContent onClick={() => Taro.navigateTo({ url: "/news-express/detail/index" })} />
			</View>
		</View>
	);
}

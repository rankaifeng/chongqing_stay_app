import React from "react";
import HomePubList from "../components/home-pub/list";
import { View } from "@tarojs/components";
import "./index.less";
import { Ellipsis, Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function CommerceOverseas() {
	return (
		<>
			<HomePubList title='海外电商产品' bgTitle='海外电商产品'>
				<View
					className='list-item'
					onClick={() =>
						Taro.navigateTo({
							url: "/job-detail/index?title=产品详情&des=斯维诗 自然健康新时尚&desEn=Swish, the new natural and healthy...",
						})
					}>
					<Image round radius={10} className='imgs' src='https://img.yzcdn.cn/vant/cat.jpeg' />
					<View className='left'>
						<View className='el ellipsis2'>
							就是大家放松的垃圾士大就是大家放松的垃圾士大夫似的士大夫似的就是大家放松的垃圾士大夫似的士大夫似的夫似的士大夫似的
						</View>
						<View className='msg ellipsis2'>
							自然健康、能量Up Up的身体，是我稳秀不累的秘密武器[酷]Swisse携手
						</View>
					</View>
				</View>
			</HomePubList>
		</>
	);
}

import { Text, View } from "@tarojs/components";
import React from "react";
import HomePubList from "../components/home-pub/list";
import "./index.less";
import Taro from "@tarojs/taro";
export default function CollaborativeStartups() {
	return (
		<>
			<HomePubList title='合作创业公司' bgTitle='合作创业公司'>
				<View
					className='list-item'
					onClick={() =>
						Taro.navigateTo({
							url: "/company-detail/index",
						})
					}>
					<Text className='item-y'>西部(重庆)科学城国际人才创新创业服务港·... Product...</Text>
					<View className='item-job'>
						<Text className='job-t'>公司简介</Text>·Company Profile
					</View>
					<View className='item-job-des'>
						西部(重庆)科学城国际人才创新创业服务港举行,旨在培养一批“会管理、懂金融、通市场、擅转化”的复合型孵化...
					</View>
					<View className='po'>渝北区·观音桥</View>
				</View>
			</HomePubList>
		</>
	);
}

import { View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../../navigation-bar";
import ListTitle from "./title";
import "./index.less";
import BgTitle from "../../bg-title";
export default function HomePubList({ title, bgTitle, children, type }) {
	return (
		<View className='home-pub-list'>
			<NavigationBar title={title} isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='list-content'>
				<ListTitle type={type} />
				<View className='list-name'>
					<BgTitle title={bgTitle} size='34rpx' />
				</View>
				{children}
			</View>
		</View>
	);
}

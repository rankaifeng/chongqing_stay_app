import { Text, View } from "@tarojs/components";
import React, { useState } from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import BgTitle from "../components/bg-title";
import StatusBtn from "../components/status-btn";
import Taro from "@tarojs/taro";
import RefreshList from "../components/refresh-list";
import { tourismSubscribeList } from "../api/globApi";
export default function ActiveRecord() {
	const [isLoad, setIsLoad] = useState(false);
	return (
		<View className='active-record'>
			<NavigationBar
				title='活动申请记录'
				isBackIcon={true}
				isWeight={true}
				titleColor='#000'
				backIconColor='#000'
			/>
			<RefreshList
				getList={tourismSubscribeList}
				isLoad={isLoad}
				setIsLoad={setIsLoad}
				renderItem={(item, index) => {
					return (
						<View
							className='active-record-item'
							onClick={() => {
								Taro.preload({ data: item });
								Taro.navigateTo({ url: "/active-record/detail/index" });
							}}>
							<BgTitle title='活动申请' size='16px' />
							<Text className='other-title'>·Event Application</Text>
							<View className='content'>
								<View className='status-content'>
									<StatusBtn status={item.subscribe_status} />
								</View>
								<Text className='content-title'>申请理由·Rationale</Text>
								<View className='content-text'>{item.mark}</View>
								<Text className='content-title'>活动日期·Event Date</Text>
								<View className='content-text'>{item.participation_time}</View>
							</View>
						</View>
					);
				}}
			/>
		</View>
	);
}

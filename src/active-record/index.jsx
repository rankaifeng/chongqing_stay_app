import { Text, View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import BgTitle from "../components/bg-title";
import StatusBtn from "../components/status-btn";
import Taro from "@tarojs/taro";
export default function ActiveRecord() {
	return (
		<View className='active-record'>
			<NavigationBar
				title='活动申请记录'
				isBackIcon={true}
				isWeight={true}
				titleColor='#000'
				backIconColor='#000'
			/>

			<View
				className='active-record-item'
				onClick={() => Taro.navigateTo({ url: "/active-record/detail/index" })}>
				<BgTitle title='活动申请' size='16px' />
				<Text className='other-title'>·Event Application</Text>
				<View className='content'>
					<View className='status-content'>
						<StatusBtn status={1} />
					</View>
					<Text className='content-title'>申请理由·Rationale</Text>
					<View className='content-text'>士大夫</View>
					<Text className='content-title'>活动日期·Event Date</Text>
					<View className='content-text'>2023-22-11</View>
				</View>
			</View>

			<View className='active-record-item'>
				<BgTitle title='活动申请' size='16px' />
				<Text className='other-title'>·Event Application</Text>
				<View className='content'>
					<View className='status-content'>
						<StatusBtn status={2} />
					</View>
					<Text className='content-title'>申请理由·Rationale</Text>
					<View className='content-text'>士大夫</View>
					<Text className='content-title'>活动日期·Event Date</Text>
					<View className='content-text'>2023-22-11</View>
				</View>
			</View>
			<View className='active-record-item'>
				<BgTitle title='活动申请' size='16px' />
				<Text className='other-title'>·Event Application</Text>
				<View className='content'>
					<View className='status-content'>
						<StatusBtn status={3} />
					</View>
					<Text className='content-title'>申请理由·Rationale</Text>
					<View className='content-text'>士大夫</View>
					<Text className='content-title'>活动日期·Event Date</Text>
					<View className='content-text'>2023-22-11</View>
				</View>
			</View>
		</View>
	);
}

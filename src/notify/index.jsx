import React from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import { View } from "@tarojs/components";
import { Ellipsis } from "@antmjs/vantui";
export default function Notify() {
	return (
		<View className='notify'>
			<NavigationBar title='签证提醒' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
			<View className='notify-content'>
				<View className='notify-item'>
					<View className='d'>
						<View className='date'>2023年1月22日 12:31</View>
					</View>
					<View className='content'>
						<View className='noti-title'>签证提醒 · Visa Reminder</View>
						<View className='noti-de'>签证已过期了哦！请尽快办理。</View>
						<View className='ellipsis'>The visa has expired! Please do it as soon as possible.</View>
					</View>
				</View>
                <View className='notify-item'>
					<View className='d'>
						<View className='date'>2023年1月22日 12:31</View>
					</View>
					<View className='content'>
						<View className='noti-title'>签证提醒 · Visa Reminder</View>
						<View className='noti-de'>签证已过期了哦！请尽快办理。</View>
						<View className='ellipsis'>The visa has expired! Please do it as soon as possible.</View>
					</View>
				</View>
			</View>
		</View>
	);
}

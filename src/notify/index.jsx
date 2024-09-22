import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import { View } from "@tarojs/components";
import RefreshList from "../components/refresh-list";
import { remindInfoList } from "../api/globApi";
export default function Notify() {
	const [isLoad, setIsLoad] = useState(false);
	return (
		<View className='notify'>
			<NavigationBar title='签证提醒' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='notify-content'>
				<RefreshList
					getList={remindInfoList}
					isLoad={isLoad}
					setIsLoad={setIsLoad}
					defaultFilter={{
						list_status: 1,
					}}
					renderItem={(item, index) => {
						return (
							<View className='notify-item'>
								<View className='d'>
									<View className='date'>{item.create_time}</View>
								</View>
								<View className='content'>
									<View className='noti-title'>签证提醒 · Visa Reminder</View>
									<View className='noti-de'>{item.description}</View>
									<View className='ellipsis'>{item.en_description}</View>
								</View>
							</View>
						);
					}}
				/>
			</View>
		</View>
	);
}

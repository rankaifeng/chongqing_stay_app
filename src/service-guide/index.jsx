import { View } from "@tarojs/components";
import React, { useState } from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import { Icon } from "@antmjs/vantui";
import RefreshList from "../components/refresh-list";
import { getActionGuideList } from "../api/globApi";
import Taro from "@tarojs/taro";
export default function ServiceGuide() {



	const [isLoad, setIsLoad] = useState(false);

	return (
		<View className='service-guide'>
			<NavigationBar title='办事指南' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<RefreshList
				getList={getActionGuideList}
				isLoad={isLoad}
				setIsLoad={setIsLoad}
				defaultFilter={{
					list_status: 1,
				}}
				renderItem={(item, index) => {
					return (
						<View className='service-guide-item' onClick={() => {
							Taro.preload({ itemData: item })
							Taro.navigateTo({ url: `/service-guide/detail/index` })
						}}>
							<View className='item-left'>
								<View className='left-title ellipsis2'>{item.title}</View>
							</View>
							<Icon name='arrow' size='20px' color='rgba(156, 156, 156, 1)' />
						</View>
					);
				}}
			/>
		</View>
	);
}

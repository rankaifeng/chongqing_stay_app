import { View } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import ImgContent from "../components/img-content";
import Taro from "@tarojs/taro";
import RefreshList from "../components/refresh-list";
import { getNewsExpressList } from "../api/globApi";
import huiImg from '../imgs/hui.jpg'
export default function NewsExpress() {
	const [isLoad, setIsLoad] = useState(false);

	return (
		<View className='news-express'>
			<NavigationBar title='要闻速递' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
			<View className='news-express-content'>
				<RefreshList
					getList={getNewsExpressList}
					isLoad={isLoad}
					setIsLoad={setIsLoad}
					defaultFilter={{
						list_status: 1,
					}}
					renderItem={(item, index) => {
						return (
							<ImgContent
								title={item.title}
								time={item.update_time}
								imgUrl={item.cover_image}
								onClick={() => {
									Taro.preload({ itemData: { ...item, type: 1 }, time: item.update_time });
									Taro.navigateTo({ url: "/news-express/detail/index" });
								}}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

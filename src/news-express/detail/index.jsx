import React from "react";
import Taro from "@tarojs/taro";
import { View, Image, RichText, ScrollView } from "@tarojs/components";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import DetailTitle from "../../components/detail-title";

const InfoListDetail = () => {
	//获取到路由参数
	const mItemData = Taro.getCurrentInstance().preloadData.itemData;
	return (
		<ScrollView scrollY className='info-detail'>
			<NavigationBar isBackIcon={true} backIconColor='#fff' />
			<Image mode='aspectFill' src={mItemData?.cover_image} style={{ height: "210px" }} className='img-t' />
			<View className='to'>
				<DetailTitle title={mItemData?.title} imgUrl={mItemData?.cover_image} />
				<View className='de-c'>
					<RichText nodes={mItemData?.description} />
				</View>
			</View>
		</ScrollView>
	);
};
export default InfoListDetail;

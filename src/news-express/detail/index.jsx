import React from "react";
import Taro from "@tarojs/taro";
import { View, Image, RichText } from "@tarojs/components";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import DetailTitle from "../../components/detail-title";

const InfoListDetail = () => {
	//获取到路由参数
	const mItemData = Taro.getCurrentInstance().preloadData.itemData;
	return (
		<View className='info-detail'>
			<NavigationBar isBackIcon={true} backIconColor='#fff' />
			<Image mode='aspectFill' src={mItemData?.cover_image} style={{ height: "200px" }} className='img-t' />
			<View className='to'>
				<DetailTitle title={mItemData?.title} imgUrl={mItemData?.cover_image} />

				<RichText className='de-c' nodes={mItemData?.description} />
			</View>
		</View>
	);
};
export default InfoListDetail;

import React from "react";
import Taro from "@tarojs/taro";
import { View, Image, RichText, Text } from "@tarojs/components";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import DetailTitle from "../../components/detail-title";
import BgTitle from "../../components/bg-title";

const InfoListDetail = () => {
	//获取到路由参数
	const mItemData = Taro.getCurrentInstance().preloadData.itemData;
	return (
		<View className='info-detail'>
			<NavigationBar isBackIcon={true} backIconColor='#fff' />
			<Image mode='aspectFill' src={mItemData?.cover_image} style={{ height: "200px" }} className='img-t' />
			<View className='to'>
				<DetailTitle
					title={mItemData?.school_name}
					imgUrl={mItemData?.logo}
					position={mItemData?.school_location}
				/>
				<View className='de-c'>
					<View style={{ marginBottom: "26rpx" }}>
						<BgTitle title='学校简介' size='30rpx' />
					</View>
					<RichText nodes={mItemData?.description} />
					<View className='de-ww'>
						学校官网:<Text className='w-t'>{mItemData?.webside}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
export default InfoListDetail;

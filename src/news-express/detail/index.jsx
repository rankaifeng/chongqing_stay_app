import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image, RichText, ScrollView } from "@tarojs/components";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import DetailTitle from "../../components/detail-title";
import FlexTitle from "../../components/flex-title";

const InfoListDetail = () => {
	//获取到路由参数
	const mItemData = Taro.getCurrentInstance().preloadData.itemData;
	const [opacity, setOpacty] = useState(1)
	const [showFlex, setShowFlex] = useState(false)
	const onScrollBind = (e) => {
		if (e.detail.scrollTop > 200) {
			setShowFlex(true)
		} else {
			if (e.detail.scrollTop <= 10) {
				setShowFlex(false)
			}
			setOpacty(1 - e.detail.scrollTop / 200);
		}
	}
	return (
		<ScrollView scrollY className='info-detail' onScroll={onScrollBind}>
			{showFlex ? <FlexTitle title="详情" /> : <NavigationBar isBackIcon={true} backIconColor='#fff' />}
			<Image mode='aspectFill' src={mItemData?.cover_image} style={{ height: "210px", opacity: opacity }} className='img-t' />
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

import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { Text, View, Image } from "@tarojs/components";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import banImg from "../../imgs/ban.png";
import ImgContent from "../../components/img-content";
import { Ellipsis } from "@antmjs/vantui";
import DetailTitle from "../../components/detail-title";

const btnArray = [
	{ id: 1, value: "活动未开始", en: "Not Yet Started", color: "gray" },
	{ id: 2, value: "活动已过期", en: "Expired", color: "gray" },
	{ id: 3, value: "报名参与", en: "Enrollment", color: "#2955AE" },
	{ id: 4, value: "已报名", en: "Enrolled", color: "gray" },
	{ id: 5, value: "无需报名", en: "No Registration Required ", color: "gray" },
];
const InfoListDetail = () => {
	const [dataDetail, setDataDetail] = useState({});
	const [str, setStr] = useState(undefined);

	return (
		<View className='info-detail'>
			<NavigationBar isBackIcon={true} backIconColor='#fff' />
			<Image src={banImg} style={{ height: "200px" }} className='img-t' />
			<View className='to'>
				<DetailTitle />

                <View className="de-c"></View>
			</View>
		</View>
	);
};
export default InfoListDetail;

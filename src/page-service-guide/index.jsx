import { RichText, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import Taro from "@tarojs/taro";
import { getEmploymentGuideListDetai } from "../api/globApi";
export default function PageServiceGuide() {
	//获取路由参数
	const { type } = Taro.getCurrentInstance().router.params;
	const [description, setDescription] = useState(undefined);
	useEffect(() => {
		getEmploymentGuideListDetai({ employment_guide_type: type }).then((res) => {
			setDescription(res.data.description);
		});
	}, []);
	return (
		<View className='page-service-guide'>
			<NavigationBar title='办事指南' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='service-guide-content'>
				<RichText nodes={description} />
			</View>
		</View>
	);
}

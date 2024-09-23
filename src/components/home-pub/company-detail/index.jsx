import { RichText, Text, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import "./index.less";
import NavigationBar from "../../navigation-bar";
import { Icon, Image } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { getEnterpriseDetail } from "../../../api/globApi";
export default function CompanyDetail() {
	//获取路由参数
	const mP = Taro.getCurrentInstance().router.params;

	const [companyDetail, setCompanyDetail] = useState(undefined)
	useEffect(() => {
		getEnterpriseDetail({ id: mP.enterpriseId }).then(res => {
			setCompanyDetail(res.data)
		})
	}, [])

	return (
		<View className='company-detail'>
			<NavigationBar title='公司详情' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='company-detail-content'>
				<View className='company-name-title'>
					<Image round width='40px' height='40px' src={companyDetail?.cover_image} />
					<View className='company-name'>
						<Text className='name'>{companyDetail?.enterprise_name}</Text>
					</View>
				</View>
				<View className='location'>
					<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
					<Text>{companyDetail?.location}</Text>
				</View>
				<View className='company-border' />

				<View className='show-html'>
					<RichText nodes={companyDetail?.enterprise_introduce} />
				</View>
			</View>
		</View>
	);
}

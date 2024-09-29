import { RichText, Text, View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../../navigation-bar";
import "./index.less";
import { Icon } from "@antmjs/vantui";
import CompanyInfo from "../company-info";
import BgTitle from "../../bg-title";
export default function JobPageDetail({
	title,
	des,
	desEn,
	name,
	logo,
	location,
	enterpriseIntroduce,
	positionIntroduce,
	enterpriseDes,
	enterpriseId,
	desTitle
}) {
	console.log(location);

	return (
		<View className='job-detail'>
			<NavigationBar title={desTitle.includes("岗位职责") ? '岗位详情' : title} isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='job-detail-content'>
				{title === "产品详情" || <View className='j-t'>
					<Text className='jt-1' style={{ fontSize: '18px' }}>{title}</Text>
				</View>}
				{title === "产品详情" || (
					<View className='location'>
						<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
						<Text style={{ color: 'gray', fontSize: '12px', fontWeight: 100 }}>{location}</Text>
					</View>
				)}

				<View className='c-c'>
					<CompanyInfo
						type='location'
						title={title}
						enterpriseDes={enterpriseDes}
						logo={logo}
						name={name}
						enterpriseId={enterpriseId}
						location={location}
						enterpriseIntroduce={enterpriseIntroduce}
					/>
				</View>
				<View style={{ fontSize: '30rpx', fontWeight: '600', margin: '20rpx 0' }}>{desTitle}</View>
				<View className='c-c-html'>
					<RichText nodes={title === "产品详情" ? enterpriseIntroduce : positionIntroduce} />
				</View>
			</View>
		</View>
	);
}

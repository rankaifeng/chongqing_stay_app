import { RichText, Text, View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../../navigation-bar";
import "./index.less";
import { Icon } from "@antmjs/vantui";
import CompanyInfo from "../company-info";
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
	enterpriseId
}) {
	return (
		<View className='job-detail'>
			<NavigationBar title={title} isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='job-detail-content'>
				<View className='j-t'>
					<Text className='jt-1'>{des}</Text>·{desEn}
				</View>
				{title === "产品详情" || (
					<View className='location'>
						<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
						<Text>{location}</Text>
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
				<View className='c-c-html'>
					<RichText nodes={title === "产品详情" ? enterpriseIntroduce : positionIntroduce} />
				</View>
			</View>
		</View>
	);
}

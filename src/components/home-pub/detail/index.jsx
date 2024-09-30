import { Image, RichText, Swiper, SwiperItem, Text, View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../../navigation-bar";
import "./index.less";
import { Icon } from "@antmjs/vantui";
import CompanyInfo from "../company-info";
import BgTitle from "../../bg-title";
import Taro from "@tarojs/taro";
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
	desTitle,
	img
}) {

	console.log(title);

	return (
		<View className='job-detail'>
			<NavigationBar title={desTitle.includes("岗位职责") ? '岗位详情' : title} isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='job-detail-content'>
				{title === "产品详情" ? <Swiper className="sw" style={{ marginBottom: '10rpx', height: '250rpx' }} autoplay indicatorDots={true} interval={500} indicatorActiveColor='#fff' >
					{JSON.parse(img).map((item, index) => (
						<SwiperItem key={`swiper#demo1${index}`}>
							<Image onClick={() => Taro.previewImage({ urls: JSON.parse(img), current: index })} mode="aspectFit" style={{ width: '100%', height: '100%', borderRadius: '10rpx' }} src={item} />
						</SwiperItem>
					))}
				</Swiper> : null}
				<View className='j-t' style={title === '产品详情' ? { borderBottom: '1px solid #ebebeb', paddingBottom: '20rpx' } : {}}>
					<Text className='jt-1' style={{ fontSize: '18px' }}>{title === "产品详情" ? des : title}</Text>

					{title === "产品详情" || (
						<View className='location'>
							<Icon name='location-o' color='rgba(0, 0, 0, 1)' />
							<Text style={{ color: 'gray', fontSize: '12px', fontWeight: 100 }}>{location}</Text>
						</View>
					)}
				</View>



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

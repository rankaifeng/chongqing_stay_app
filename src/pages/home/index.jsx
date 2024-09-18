import { View, Text } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Image, Swiper, SwiperItem } from "@antmjs/vantui";
import NavigationBar from "../../components/navigation-bar";
import GridContent from "../../components/grid-content";
import BgTitle from "../../components/bg-title";
import ImgContent from "../../components/img-content";
import banImg from "../../imgs/ban.png";
import xuImg from "../../imgs/xu.svg";
import banshiImg from "../../imgs/banshi.svg";
import tixingImg from "../../imgs/tixing.svg";
import yanqiImg from "../../imgs/yanqi.svg";

import chuagnxinImg from "../../imgs/chuangx.svg";
import zhidaoImg from "../../imgs/zhidao.svg";
import dianshangImg from "../../imgs/dianshang.svg";
import gognsiImg from "../../imgs/gongsi.svg";
import Taro from "@tarojs/taro";
const imags = [banImg];
export default function Home() {
	const height = 150;
	return (
		<View className='home'>
			<View className='home-content'>
				<NavigationBar leftTitle='悦留重庆' />
				<View className='v'>
					<Swiper height={height} autoPlay='3000' initPage={0} paginationVisible style={{ borderRadius: 10 }}>
						{imags.map((item, index) => (
							<SwiperItem key={`swiper#demo1${index}`}>
								<Image src={item} fit='cover' width='100%' height={`${height}px`} />
							</SwiperItem>
						))}
					</Swiper>
					<View className='t'>
						<BgTitle title='签证须知' size='18px' />
						<Text>·Visa Information</Text>
					</View>

					<GridContent
						datas={[
							{
								title: "居留须知",
								eg: "Notes on Residence",
								path: "/residence-information/index",
								bg: "#e0edff",
								icon: xuImg,
							},
							{
								title: "办事指南",
								path: "/service-guide/index",
								eg: "Clerk's Guide",
								bg: "#baf3e5",
								icon: banshiImg,
							},
							{
								title: "签证提醒",
								eg: "Visa Reminder",
								path: "/notify/index",
								bg: "#fff1d4",
								icon: tixingImg,
							},
							{
								title: "签证延期",
								path: "/visa-extension/index",
								eg: "Visa Extension",
								bg: "#ffecec",
								icon: yanqiImg,
							},
						]}
					/>
					<View className='t'>
						<BgTitle title='要闻速递' size='18px' />
						<Text>·News Express</Text>
					</View>
					<ImgContent onClick={() => Taro.navigateTo({ url: "/news-express/index" })} />
					<View className='t'>
						<BgTitle title='留学重庆' size='18px' />
						<Text>·Study in Chongqing</Text>
					</View>

					<View className='studay'>
						<View className='s-left'>
							<View className='left-item'>
								<Image round width={150} height={150} src='https://img.yzcdn.cn/vant/cat.jpeg' />
							</View>
							<View className='left-item ml'>
								<Image round width={150} height={150} src='https://img.yzcdn.cn/vant/cat.jpeg' />
							</View>
							<View className='left-item ml'>
								<Image round width={150} height={150} src='https://img.yzcdn.cn/vant/cat.jpeg' />
							</View>
						</View>
						<View className='s-right'>
							<View>更多</View>
							<View>more</View>
						</View>
					</View>
					<View className='t'>
						<BgTitle title='文旅之窗' size='18px' />
						<Text>·Window on Culture and Tourism</Text>
					</View>
					<ImgContent />
					<View className='t'>
						<BgTitle title='创新创业' size='18px' />
						<Text>·Innovation and entrepreneurship</Text>
					</View>

					<GridContent
						type='2'
						datas={[
							{
								title: "创新创业项目申报",
								eg: "Innovation and...",
								bg: "#ffdbc2",
								icon: chuagnxinImg,
							},
							{
								title: "实习指导",
								eg: "Practical guidance",
								bg: "#d0cfff",
								icon: zhidaoImg,
							},
							{
								title: "电商海外贸易产品",
								eg: "E-commerce overseas...",
								bg: "#a3c9ff",
								icon: dianshangImg,
							},
							{
								title: `创业公司项目展示`,
								eg: "Startup Company",
								bg: "#9ee4ff",
								icon: gognsiImg,
							},
						]}
					/>
				</View>
			</View>
		</View>
	);
}

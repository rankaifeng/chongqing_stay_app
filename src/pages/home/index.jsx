import { View, Text } from "@tarojs/components";
import React from "react";
import "./index.less";
import { Image, Swiper, SwiperItem } from "@antmjs/vantui";
import NavigationBar from "../../components/navigation-bar";
import GridContent from "../../components/grid-content";
import BgTitle from "../../components/bg-title";
import ImgContent from "../../components/img-content";
const imags = [
	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg",
	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg",
];
export default function Home() {
	const height = 150;
	return (
		<View className='home'>
			<View className='home-content'>
				<NavigationBar leftTitle='悦留重庆' />
				<View className="v">
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
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
							{
								title: "办事指南",
								path: "/service-guide/index",
								eg: "Clerk's Guide",
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
							{
								title: "签证提醒",
								eg: "Visa Reminder",
								path: "/notify/index",
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
							{
								title: "签证延期",
								path: "/visa-extension/index",
								eg: "Visa Extension",
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
						]}
					/>
					<View className='t'>
						<BgTitle title='要闻速递' size='18px' />
						<Text>·News Express</Text>
					</View>
					<ImgContent />
					<View className='t'>
						<BgTitle title='留学重庆' size='18px' />
						<Text>·Study in Chongqing</Text>
					</View>

					<View className='studay'>
						<View className='s-left'>
							<View className='left-item'>
								<Image width={100} height={100} src='https://img.yzcdn.cn/vant/cat.jpeg' />
							</View>
							<View className='left-item ml'>
								<Image width={100} height={100} src='https://img.yzcdn.cn/vant/cat.jpeg' />
							</View>
							<View className='left-item ml'>
								<Image width={100} height={100} src='https://img.yzcdn.cn/vant/cat.jpeg' />
							</View>
						</View>
						<View className='s-right'></View>
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
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
							{
								title: "实习指导",
								eg: "Practical guidance",
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
							{
								title: "电商海外贸易产品",
								eg: "E-commerce overseas...",
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
							{
								title: `创业公司项目展示`,
								eg: "Startup Company",
								bg: "gray",
								icon: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
							},
						]}
					/>
				</View>
			</View>
		</View>
	);
}

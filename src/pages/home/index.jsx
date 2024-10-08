import { View, Text, Image } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import GridContent from "../../components/grid-content";
import BgTitle from "../../components/bg-title";

import xuImg from "../../imgs/xu.svg";
import banshiImg from "../../imgs/banshi.svg";
import tixingImg from "../../imgs/tixing.svg";
import yanqiImg from "../../imgs/yanqi.svg";
import chuagnxinImg from "../../imgs/chuangx.svg";
import zhidaoImg from "../../imgs/zhidao.svg";
import dianshangImg from "../../imgs/dianshang.svg";
import gognsiImg from "../../imgs/gongsi.svg";
import Taro from "@tarojs/taro";
import SwiperImg from "./SwiperImg";
import NewExpress from "./NewExpress";
import StudayScholl from "./StudayScholl";
import Window from "./Window";
import GridTitleContent from "./grid-content";
import useBarHeight from '../../hooks/useBarHeight'
export default function Home() {
	const { navBarHeight } = useBarHeight()
	return (
		<View className='home'>
			<View className='home-content'>
				<NavigationBar leftTitle='悦留重庆' />
				<View className='v' style={{ height: `calc(100vh - ${navBarHeight + 15}px)` }}>
					<SwiperImg />
					<View className='t'>
						<BgTitle title='签证须知' size='18px' />
						<Text>·Visa Information</Text>
					</View>

					<GridTitleContent
						datas={[
							{
								title: "居留须知",
								eg: "Residence Information",
								path: "/residence-information/index",
								bg: "#e0edff",
								icon: xuImg,
								bottom: 0
							},
							{
								title: "办事指南",
								path: "/service-guide/index",
								eg: "Service Guide",
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
					<NewExpress />
					<StudayScholl />
					<Window />
					<View className='t'>
						<BgTitle title='创新创业' size='18px' />
						<Text>·Innovation and entrepreneurship</Text>
					</View>

					<GridContent
						type='2'
						datas={[
							{
								title: "创新创业项目申报",
								eg: "Application for innovation and entrepreneurship",
								bg: "#ffdbc2",
								path: "/project-application/index",
								icon: chuagnxinImg,
								bottom: '20rpx'
							},
							{
								title: "实习试训",
								eg: "Internship Training",
								path: "/internship-guidance/index",
								bg: "#d0cfff",
								icon: zhidaoImg,
								bottom: '0'
							},
							{
								title: "电商海外贸易产品",
								eg: "E-commerce overseas trade products",
								path: "/commerce-overseas/index",
								bg: "#a3c9ff",
								icon: dianshangImg,
								bottom: '20rpx'
							},
							{
								title: `创业公司项目展示`,
								eg: "Startup Company Project Showcase",
								path: "/collaborative-startups/index",
								bg: "#9ee4ff",
								icon: gognsiImg,
								bottom: '20rpx'
							},
						]}
					/>
				</View>
			</View>
		</View>
	);
}

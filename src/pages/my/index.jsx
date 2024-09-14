import { Text, View } from "@tarojs/components";
import React from "react";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import Image from "@antmjs/vantui/es/image";
import Icon from "@antmjs/vantui/es/icon";
import BgTitle from "../../components/bg-title";
import zy from "../../imgs/zy.svg";
import xy from "../../imgs/xy.svg";
export default function My() {
	return (
		<View className='my'>
			<NavigationBar leftTitle='个人中心' />
			<View className='my-content'>
				<View className='my-top'>
					<Text className='name'>亮亮的小佩服哟 [点击登录]</Text>
					<Text className='day'>加入悦留学重庆第 345 天</Text>
					<Image className='avatar' src='https://img.yzcdn.cn/vant/cat.jpeg' round />
				</View>

				<View className='student-info'>
					<BgTitle title='学生信息' />

					<View className='info-content'>
						<View className='info-item'>
							<Text className='xy'>学院·Colleges</Text>
							<Text className='xy-name'>理学院</Text>
							<Image
								src={xy}
								style={{ width: "33.5px", height: "21px", position: "absolute", right: 0, bottom: 0 }}
							/>
						</View>
						<View className='info-item ml'>
							<Text className='xy'>专业·Professions</Text>
							<Text className='xy-name'>新闻传媒</Text>
							<Image
								src={zy}
								style={{ width: "33.5px", height: "21px", position: "absolute", right: 0, bottom: 0 }}
							/>
						</View>
					</View>
				</View>

				<View className='server'>
					<BgTitle title='服务功能' />
				</View>

				<View className='active'>
					<View className='active-item'>
						<View className='active-svg' />
						活动申请记录·Event Application Record
					</View>
					<Icon name='arrow' size='16px' style={{ marginRight: "10px" }} />
				</View>

				<View className='exit'>退出账号·Abort</View>
			</View>
		</View>
	);
}

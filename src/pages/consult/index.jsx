import { View } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../../components/navigation-bar";
import renImg from "../../imgs/ren.png";
import { ActionSheet, Icon, Image } from "@antmjs/vantui";
import phoneImg from "../../imgs/phone.svg";
import liuyanImg from "../../imgs/liuyan.svg";
import Taro from "@tarojs/taro";
export default function Consult() {
	const [phone, setPhone] = useState(undefined);

	return (
		<View className='consult'>
			<NavigationBar leftTitle='在线咨询' />

			<View className='consult-content' style={{ height: "198px" }}>
				<View className='gg-bg' style={{ width: "140px", height: "86px" }}></View>
				<Image className='ren-bg' src={renImg} style={{ width: "185px", height: "198px" }} />
			</View>
			<View className='c-c'>
				<View className='c-c-item' onClick={() => setPhone("22233333")}>
					<Image src={phoneImg} style={{ width: "50px", height: "50px" }} />
					<View className='c-right'>
						<View className='phone'>拨打电话</View>
						<View className='phone-des'>Make a telephone call</View>
					</View>
					<Icon className='arrow' name='arrow' color='rgba(191, 191, 191, 1)' />
				</View>

				<View className='c-c-item' onClick={() => Taro.navigateTo({ url: "/pages/consult/message/index" })}>
					<Image src={liuyanImg} style={{ width: "50px", height: "50px" }} />
					<View className='c-right'>
						<View className='phone'>留言</View>
						<View className='phone-des'>Make a telephone call</View>
					</View>
					<Icon className='arrow' name='arrow' color='rgba(191, 191, 191, 1)' />
				</View>
			</View>
			{phone && (
				<ActionSheet
					cancelText='取消'
					onCancel={() => setPhone(undefined)}
					style={{ height: "120px" }}
					show={true}
					closeOnClickOverlay={false}
					onSelect={(e) => {
						Taro.makePhoneCall({ phoneNumber: phone });
					}}
					actions={[
						{
							name: `呼叫${phone}`,
						},
					]}
				/>
			)}
		</View>
	);
}

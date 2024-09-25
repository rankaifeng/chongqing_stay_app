import React, { useEffect, useState } from "react";
import BgTitle from "../../components/bg-title";
import { Image, Text, View } from "@tarojs/components";
import { getSchoolInfoList } from "../../api/globApi";
import Taro, { useDidShow } from "@tarojs/taro";

export default function StudayScholl() {
	const [schoolInfoList, setSchoolInfoList] = useState([]);
	useDidShow(() => {
		getSchoolInfoList({ list_status: 1 }).then((res) => {
			const { code, data } = res;
			if (code === 1) {
				setSchoolInfoList(data);
			}
		});
	}, []);
	return (
		<>
			{schoolInfoList && schoolInfoList.length ? (
				<>
					<View className='t'>
						<BgTitle title='留学重庆' size='18px' />
						<Text>·Study in Chongqing</Text>
					</View>

					<View className='studay'>
						<View className='s-left'>
							{schoolInfoList.map((item) => {
								return (
									<View className='left-item'>
										<Image
											className='left-item-img'
											round
											mode='aspectFill'
											width={150}
											height={150}
											src={item.logo}
										/>
									</View>
								);
							})}
						</View>
						<View className='s-right' onClick={() => Taro.navigateTo({ url: "/studay-chongqing/index" })}>
							<View>更多</View>
							<View>more</View>
						</View>
					</View>
				</>
			) : null}
		</>
	);
}

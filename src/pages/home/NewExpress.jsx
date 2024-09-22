import { Text, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import BgTitle from "../../components/bg-title";
import ImgContent from "../../components/img-content";
import Taro from "@tarojs/taro";
import { getNewsExpressList } from "../../api/globApi";

export default function NewExpress() {
	const [newsExpressList, setNewsExpressList] = useState([]);
	useEffect(() => {
		getNewsExpressList({ list_status: 1 }).then((res) => {
			const { code, data } = res;
			if (code === 1) {
				setNewsExpressList(data);
			}
		});
	}, []);

	return (
		<>
			{newsExpressList && newsExpressList.length ? (
				<>
					<View className='t'>
						<BgTitle title='要闻速递' size='18px' />
						<Text>·News Express</Text>
					</View>
					<ImgContent
						title={newsExpressList[0].title}
						time={newsExpressList[0].update_time}
						imgUrl={newsExpressList[0].cover_image}
						onClick={() => Taro.navigateTo({ url: "/news-express/index" })}
					/>
				</>
			) : null}
		</>
	);
}

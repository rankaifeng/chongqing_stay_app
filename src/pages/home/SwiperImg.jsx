import { Image, Swiper, SwiperItem } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import banImg from "../../imgs/ban.png";
import { getHomeBannerImgs } from "../../api/globApi";
export default function SwiperImg() {
	const [imags, setImags] = useState([]);
	const [duration, setDuration] = useState(3000);
	useEffect(() => {
		getHomeBannerImgs().then((res) => {
			const { code, data } = res;
			if (code === 1) {
				if (data.length) {
					setImags(data.map((item) => item.cover_image));
				} else {
					setImags([banImg]);
				}
				setDuration(res.carousel_time * 1000);
			} else {
				setImags([banImg]);
			}
		});
	}, []);
	return (
		<Swiper className='swiper' autoplay indicatorDots={true} interval={duration} indicatorActiveColor='#fff' >
			{imags.map((item, index) => (
				<SwiperItem key={`swiper#demo1${index}`}>
					<Image className='img' mode='aspectFill' src={item} />
				</SwiperItem>
			))}
		</Swiper>
	);
}

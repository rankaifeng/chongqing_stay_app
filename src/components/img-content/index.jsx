import { Image, Text, Video, View } from "@tarojs/components";
import React from "react";
import "./index.less";
export default function ImgContent({ onClick, imgUrl, title, time, type, videoUrl }) {
	return (
		<View className='img-content' onClick={onClick}>
			{type ? (
				<Video
					className='video'
					src={videoUrl}
					initialTime={0}
					controls={false}
					autoplay={false}
					showCenterPlayBtn={false}
				/>
			) : (
				<Image mode='aspectFill' className='imgs' src={imgUrl || "https://img.yzcdn.cn/vant/cat.jpeg"} />
			)}

			<View className='left'>
				<View className='el ellipsis2'>{title}</View>
				<View className='time'>{time}</View> 
			</View>
		</View>
	);
}

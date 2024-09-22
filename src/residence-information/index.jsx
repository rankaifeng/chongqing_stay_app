import { Video, View } from "@tarojs/components";
import React, { useState } from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import ImgContent from "../components/img-content";
import { Dialog, Popup } from "@antmjs/vantui";
import RefreshList from "../components/refresh-list";
import { getResidenceNoticeList } from "../api/globApi";
export default function ResidenceInformation() {
	const [videoUrl, setVideoUrl] = useState(undefined);
	const [isLoad, setIsLoad] = useState(false);

	return (
		<View className='residence-information'>
			<NavigationBar title='居留须知' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='img-content-container'>
				<RefreshList
					getList={getResidenceNoticeList}
					isLoad={isLoad}
					setIsLoad={setIsLoad}
					defaultFilter={{
						list_status: 1,
					}}
					renderItem={(item, index) => {
						return (
							<ImgContent
								onClick={() => setVideoUrl(item.video)}
								videoUrl={item.video}
								type='video'
								title={item.title}
								time={item.update_time}
							/>
						);
					}}
				/>
			</View>
			<Dialog
				id='vanDialog3'
				showCancelButton={false}
				showConfirmButton={false}
				show={videoUrl}
				onClose={() => setVideoUrl(undefined)}>
				<Video
					className='big-video'
					src={videoUrl}
					initialTime={0}
					controls={true}
					autoplay={true}
					showCenterPlayBtn={false}
				/>
			</Dialog>
		</View>
	);
}

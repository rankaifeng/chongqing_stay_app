import { Video, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import ImgContent from "../components/img-content";
import { getResidenceNoticeList } from "../api/globApi";
import { Dialog, Popup } from "@antmjs/vantui";
export default function ResidenceInformation() {
	const [residenceNoticeList, setResidenceNoticeList] = useState([]);
	const [videoUrl, setVideoUrl] = useState(undefined);
	useEffect(() => {
		getResidenceNoticeList({ list_status: 1 }).then((res) => {
			console.log(res);
			setResidenceNoticeList(res.data);
		});
	}, []);

	return (
		<View className='residence-information'>
			<NavigationBar title='居留须知' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='img-content-container'>
				{residenceNoticeList && residenceNoticeList.length
					? residenceNoticeList.map((item, index) => {
							return (
								<ImgContent
									onClick={() => setVideoUrl(item.video)}
									videoUrl={item.video}
									type='video'
									title={item.title}
									time={item.update_time}
								/>
							);
					  })
					: null}
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

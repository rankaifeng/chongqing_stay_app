import { RichText, Text, View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import HomePubList from "../components/home-pub/list";
import "./index.less";
import Taro from "@tarojs/taro";
import { getEnterpriseInfoList, getEmploymentGuideListDetail } from "../api/globApi";
import MyDialog from "../components/home-pub/dialog";
import RefreshList from "../components/refresh-list";
export default function CollaborativeStartups() {
	const [isLoad, setIsLoad] = useState(false);
	const [description, setDescription] = useState(undefined);
	const [id, setId] = useState(undefined)
	useEffect(() => {
		getEmploymentGuideListDetail({ employment_guide_type: 3 }).then((res) => {
			setDescription(res.data.description);
			setId(res.data.id)
		});
	}, []);

	return (
		<>
			<HomePubList title='合作创业公司' bgTitle='合作创业公司' type={4}>
				<RefreshList
					getList={getEnterpriseInfoList}
					isLoad={isLoad}
					setIsLoad={setIsLoad}
					renderItem={(item, index) => {
						return <View
							className='list-item'
							onClick={() =>
								Taro.navigateTo({
									url: `/company-detail/index?name=${item.enterprise_name}&logo=${item.cover_image}&enterpriseIntroduce=${item.enterprise_introduce}&location=${item.location}&enterpriseId=${item.id}`,
								})
							}>
							<Text className='item-y'>{item.enterprise_name}</Text>
							<View className='item-job'>
								<Text className='job-t'>公司简介</Text>·Company Profile
							</View>
							<View className='item-job-des'>
								<RichText nodes={item.enterprise_introduce} />
							</View>
							<View className='po'>{item.location}</View>
						</View>
					}}
				/>
				{description && <MyDialog id={id} type="collaborative" setDescription={setDescription} description={description} />}
			</HomePubList>
		</>
	);
}

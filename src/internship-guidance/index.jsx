import React, { useEffect, useState } from "react";
import HomePubList from "../components/home-pub/list";
import MyDialog from "../components/home-pub/dialog";
import CompanyInfo from "../components/home-pub/company-info";
import "./index.less";
import { RichText, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getEmploymentGuideListDetail, getPositionInfoList } from "../api/globApi";
import { Empty } from "@antmjs/vantui";
import RefreshList from "../components/refresh-list";
export default function InternshipGuidance() {
	const [description, setDescription] = useState(undefined);
	const [isLoad, setIsLoad] = useState(false);
	const [id, setId] = useState(undefined)
	useEffect(() => {
		getEmploymentGuideListDetail({ employment_guide_type: 1 }).then((res) => {
			setDescription(res.data.description);
			setId(res.data.id)
		});

	}, []);
	return (
		<>
			<HomePubList title='实习试训' bgTitle='实习试训岗位' type={2}>
				<RefreshList
					getList={getPositionInfoList}
					isLoad={isLoad}
					defaultFilter={{
						list_status: 1,
					}}
					setIsLoad={setIsLoad}
					renderItem={(item, index) => {
						return <View
							className='list-item'
							onClick={() => {
								Taro.navigateTo({
									url: `/job-detail/index?title=${item?.position_name}&location=${item?.enterprise_location}&logo=${item?.enterprise_cover_image}&name=${item?.enterprise_name}&enterpriseIntroduce=公司简介&positionIntroduce=${item.position_introduce}&enterpriseId=${item.enterprise_id}&desTitle=岗位职责·Job responsibilities`,
								});
							}}>
							<View className='item-y'>{item?.position_name}</View>
							<View className='item-job'>
								<Text className='job-t'>岗位职责</Text>·Job responsibilities
							</View>
							<View className='item-job-des'>
								<RichText nodes={item?.position_introduce} />
							</View>
							<CompanyInfo
								enterpriseId={item?.enterprise_id}
								name={item?.enterprise_name}
								logo={item?.enterprise_cover_image}
								location={item?.enterprise_location}
							/>
						</View>
					}}
				/>
			</HomePubList>
			{description && <MyDialog id={id} type="internship" setDescription={setDescription} description={description} />}
		</>
	);
}

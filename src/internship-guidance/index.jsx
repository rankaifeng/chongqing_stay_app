import React, { useEffect, useState } from "react";
import HomePubList from "../components/home-pub/list";
import MyDialog from "../components/home-pub/dialog";
import CompanyInfo from "../components/home-pub/company-info";
import "./index.less";
import { RichText, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { getEmploymentGuideListDetail, getEnterpriseInfoList } from "../api/globApi";
import { Empty } from "@antmjs/vantui";
export default function InternshipGuidance() {
	const [description, setDescription] = useState(undefined);
	const [enterpriseInfoList, setEnterpriseInfoList] = useState([]);
	useEffect(() => {
		getEnterpriseInfoList({ list_status: 1 }).then((res) => {
			setEnterpriseInfoList(res.data);
		});

		getEmploymentGuideListDetail({ employment_guide_type: 1 }).then((res) => {
			setDescription(res.data.description);
		});
	}, []);
	return (
		<>
			<HomePubList title='实习指导' bgTitle='实习试训岗位' type={2}>
				{enterpriseInfoList && enterpriseInfoList.length ? (
					enterpriseInfoList.map((item) => {
						return (
							<View
								className='list-item'
								onClick={() =>{
									Taro.navigateTo({
										url: `/job-detail/index?title=岗位详情&des=业务产品线下推广专员&desEn=Business Product...&location=${item?.location}&logo=${item?.cover_image}&name=${item?.enterprise_name}&enterpriseIntroduce=${item?.enterprise_introduce}&positionIntroduce=就是大家佛教圣地`,
									})
								}
									
								}>
								<Text className='item-y'>业务产品线下推广专员·Business Product...</Text>
								<View className='item-job'>
									<Text className='job-t'>岗位职责</Text>·Job responsibilities
								</View>
								<View className='item-job-des'>
									<RichText nodes={item?.position_introduce} />
								</View>
								<CompanyInfo
									name={item?.enterprise_name}
									logo={item?.cover_image}
									location={item?.location}
								/>
							</View>
						);
					})
				) : (
					<Empty />
				)}
			</HomePubList>
			{description && <MyDialog setDescription={setDescription} description={description} />}
		</>
	);
}

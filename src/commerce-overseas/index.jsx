import React, { useEffect, useState } from "react";
import HomePubList from "../components/home-pub/list";
import { Image, RichText, View } from "@tarojs/components";
import "./index.less";
import { Empty } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { getEmploymentGuideListDetail, getProductInfoList } from "../api/globApi";
import MyDialog from "../components/home-pub/dialog";
import RefreshList from "../components/refresh-list";
export default function CommerceOverseas() {
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
			<HomePubList title='海外电商产品' bgTitle='海外电商产品' type={4}>

				<RefreshList
					getList={getProductInfoList}
					isLoad={isLoad}
					setIsLoad={setIsLoad}
					defaultFilter={{
						list_status: 1,
					}}
					renderItem={(item, index) => {
						return <View
							className='list-item'
							onClick={() => {
								Taro.preload({ enterpriseIntroduce: item?.product_introduce });
								Taro.navigateTo({
									url: `/job-detail/index?title=产品详情&des=${item?.product_name}&name=${item?.enterprise_name}&logo=${item?.enterprise_cover_image}&enterpriseId=${item.enterprise_id}&desTitle=产品简介·Products&location=${item?.enterprise_location}&img=${JSON.stringify(item?.cover_image_list)}`,
								});
							}}>
							<Image mode='aspectFill' className='imgs' src={item?.cover_image_list[0]} />
							<View className='left'>
								<View className='el ellipsis2'>{item?.product_name}</View>
								<View className='msg ellipsis2'>
									<RichText nodes={item?.product_introduce} />
								</View>
							</View>
						</View>
					}}
				/>
				{description && <MyDialog id={id} type="commerce" setDescription={setDescription} description={description} />}
			</HomePubList>
		</>
	);
}

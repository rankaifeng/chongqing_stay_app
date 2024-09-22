import React, { useEffect, useState } from "react";
import HomePubList from "../components/home-pub/list";
import { Image, RichText, View } from "@tarojs/components";
import "./index.less";
import { Empty } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { getEmploymentGuideListDetail, getProductInfoList } from "../api/globApi";
import MyDialog from "../components/home-pub/dialog";
export default function CommerceOverseas() {
	const [prdoctInfoList, setPrdoctInfoList] = useState([]);
	const [description, setDescription] = useState(undefined);
	useEffect(() => {
		getProductInfoList({ list_status: 1 }).then((res) => {
			setPrdoctInfoList(res.data);
		});

		getEmploymentGuideListDetail({ employment_guide_type: 3 }).then((res) => {
			setDescription(res.data.description);
		});
	}, []);

	return (
		<>
			<HomePubList title='海外电商产品' bgTitle='海外电商产品' type={4}>
				{prdoctInfoList && prdoctInfoList.length ? (
					prdoctInfoList.map((item) => {
						console.log(item);
						return (
							<View
								className='list-item'
								onClick={() => {
									Taro.preload({ enterpriseIntroduce: item?.product_introduce });
									Taro.navigateTo({
										url: `/job-detail/index?title=产品详情&des=${item?.product_name}&name=${item?.enterprise_name}&logo=${item?.enterprise_cover_image}&location=渝北观音桥&enterpriseDes=企业和技术交底史蒂夫纳什电脑辐射`,
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
						);
					})
				) : (
					<Empty />
				)}

				{description && <MyDialog setDescription={setDescription} description={description} />}
			</HomePubList>
		</>
	);
}

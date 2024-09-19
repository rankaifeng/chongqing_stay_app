import React, { useState } from "react";
import HomePubList from "../components/home-pub/list";
import MyDialog from "../components/home-pub/dialog";
import CompanyInfo from "../components/home-pub/company-info";
import "./index.less";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
export default function InternshipGuidance() {
	const [show, setShow] = useState(false);
	return (
		<>
			<HomePubList title='实习指导' bgTitle='实习试训岗位'>
				<View
					className='list-item'
					onClick={() =>
						Taro.navigateTo({
							url: "/job-detail/index?title=岗位详情&des=业务产品线下推广专员&desEn=Business Product...",
						})
					}>
					<Text className='item-y'>业务产品线下推广专员·Business Product...</Text>
					<View className='item-job'>
						<Text className='job-t'>岗位职责</Text>·Job responsibilities
					</View>
					<View className='item-job-des'>
						1.负责电话安排落实好区域内各单位组织消防安全知识讲座的普及培训课程;2.回访、维护已接受培训及未接受培训的客户单......
					</View>
					<CompanyInfo />
				</View>
			</HomePubList>
			<MyDialog show={show} setShow={setShow} />
		</>
	);
}

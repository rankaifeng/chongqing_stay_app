import React from "react";
import JobPageDetail from "../components/home-pub/detail";
import Taro from "@tarojs/taro";

export default function JobDetail() {
	const mParams = Taro.getCurrentInstance().router.params;
	return (
		<JobPageDetail
			title={mParams?.title}
			des={mParams?.des}
			desEn={mParams?.desEn}
			name={mParams?.name}
			location={mParams?.location}
			logo={mParams?.logo}
			enterpriseIntroduce={mParams?.enterpriseIntroduce}
		/>
	);
}

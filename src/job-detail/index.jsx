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
			enterpriseId={mParams?.enterpriseId}
			positionIntroduce={mParams?.positionIntroduce}
			enterpriseDes={mParams?.enterpriseDes}
			enterpriseIntroduce={
				mParams.title === "产品详情"
					? Taro.getCurrentInstance().preloadData.enterpriseIntroduce
					: mParams?.enterpriseIntroduce
			}
		/>
	);
}

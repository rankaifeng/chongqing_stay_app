import { View } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import RefreshList from "../components/refresh-list";
import { getSchoolInfoList } from "../api/globApi";
import StudaySchoolItem from "./item";
export default function StudayChong() {
	const [isLoad, setIsLoad] = useState(false);

	return (
		<View className='news-express'>
			<NavigationBar title='留学重庆' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
			<View className='news-express-content'>
				<RefreshList
					getList={getSchoolInfoList}
					isLoad={isLoad}
					setIsLoad={setIsLoad}
					defaultFilter={{
						list_status: 1,
					}}
					renderItem={(item, index) => {
						return <StudaySchoolItem item={item} />;
					}}
				/>
			</View>
		</View>
	);
}

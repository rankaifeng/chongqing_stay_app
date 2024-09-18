import { View } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import { Uploader } from "@antmjs/vantui";
export default function ProjectApplication() {
	const [value, setValue] = useState([]);
	const [datas, setDatas] = useState([
		{ title: "申请表·Request Rorm", fileList: [] },
		{
			title: "护照首页、有效签证原件、复印件·Original and photocopy of the first page of passport and valid visa",
			fileList: [],
		},
		{ title: "住所使用相关文件·Documents related to the use of accommodation", fileList: [] },
		{ title: "创业计划书·business plan", fileList: [] },
		{ title: "毕业证书原件及复印件·Original and photocopy of graduation certificate", fileList: [] },
		{ title: "公司章程登相关文件·Articles of Incorporation Registration Related Documents", fileList: [] },
	]);
	const afterRead = (event) => {
		const { file } = event.detail;
		setValue(value.concat(file));
	};
	const deleteAction = (event) => {
		const { index } = event.detail;
		const valueNew = JSON.parse(JSON.stringify(value));
		valueNew.splice(index, 1);
		setValue(valueNew);
	};
	return (
		<View className='project-application'>
			<NavigationBar title='项目申报' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='pro-content'>
				{datas.map((item) => {
					return (
						<View className='project-item'>
							<View className='project-title'>{item.title}</View>
							<Uploader accept='image' fileList={value} onAfterRead={afterRead} onDelete={deleteAction} />
						</View>
					);
				})}
			</View>
			<View className='submit'>提交申报 · Submit</View>
		</View>
	);
}

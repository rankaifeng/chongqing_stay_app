import { View } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import { AtImagePicker } from "taro-ui";
import { fileUpload, innovationEntrepreneurship } from "../api/globApi";
import MyLoading from "../components/my-loading";
import Taro from "@tarojs/taro";

export default function ProjectApplication() {
	const [isLoading, setLoading] = useState(false)
	const [datas, setDatas] = useState([
		{ title: "申请表·Request Rorm", files: [], },
		{
			title: "护照首页、有效签证原件、复印件·Original and photocopy of the first page of passport and valid visa",
			files: [],
		},
		{ title: "住所使用相关文件·Documents related to the use of accommodation", files: [], },
		{ title: "创业计划书·business plan", files: [], },
		{ title: "毕业证书原件及复印件·Original and photocopy of graduation certificate", files: [], },
		{ title: "公司章程登相关文件·Articles of Incorporation Registration Related Documents", files: [], },
	]);

	const onSureClick = () => {
		if (datas.length) {
			setLoading(true);
			innovationEntrepreneurship({ files: JSON.stringify(datas) })
				.then((res) => {
					Taro.showToast({ title: res.msg, icon: "none" });
					if (res.code === 1) {
						setTimeout(() => {
							Taro.navigateBack();
						}, 1000);
					}
				})
				.finally((e) => setLoading(false));
		}
	};
	const onImageChange = (files, p, type) => {
		console.log(type);

		if (type === 'remove') {
			const m = [...datas];
			m[p].files = files;
			setDatas(m);
			return
		}
		console.log(files);

		fileUpload({ file_value: files[files.length - 1].url, file_type: 1 }).then((res) => {
			const m = [...datas];
			m[p].files = m[p].files.concat({ url: res.data[0].file_url });
			setDatas(m);
		});
	};
	return (
		<View className='project-application'>
			<NavigationBar title='项目申报' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='pro-content'>
				{datas.map((item, index) => {
					return (
						<View className='project-item'>
							<View className='project-title'>{item.title}</View>
							<AtImagePicker
								showAddBtn={item.files.length >= 3 ? false : true}
								files={item.files}
								onChange={(f, type, postion) => onImageChange(f, index, type, postion)}
							/>
						</View>
					);
				})}
			</View>
			<View className='submit' onClick={onSureClick}>提交申报 · Submit</View>
			{isLoading && <MyLoading />}
		</View>
	);
}

import { View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../components/navigation-bar";
import "./index.less";
import ImgContent from "../components/img-content";
export default function ResidenceInformation() {
	return (
		<View className='residence-information'>
			<NavigationBar title='居留须知' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
			<ImgContent />
            <ImgContent />
            <ImgContent />
            <ImgContent />
		</View>
	);
}

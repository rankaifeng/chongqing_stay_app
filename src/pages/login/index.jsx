import { View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../../components/navigation-bar";
import "./index.less";
import { Button } from "@antmjs/vantui";
export default function Login() {
	return (
		<View className='login'>
			<NavigationBar title='登录' isBackIcon={true} backIconColor='#000' titleColor='#000' />

		</View>
	);
}

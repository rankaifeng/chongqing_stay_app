import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import "./index.less";
import Icon from "@antmjs/vantui/es/icon";

const NavigationBar = ({ isBackIcon, backIconColor, title, titleColor, leftTitle, isWeight }) => {
	const [navBarHeight, setNavBarHeight] = useState(0);

	useEffect(() => {
		getNavHeight();
	}, []);

	const getNavHeight = () => {
		let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
		var sysinfo = Taro.getSystemInfoSync();
		let statusBarHeight = sysinfo.statusBarHeight;
		let menuBottonHeight = menuButtonObject.height;
		let menuBottonTop = menuButtonObject.top;
		let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2;
		setNavBarHeight(navBarHeight);
	};
	const onBack = () => {
		const pages = getCurrentPages();
		Taro.navigateBack({ delta: 1 });
	};
	return (
		<View className={`nav_custom_bar`} style={{ height: ` ${navBarHeight}px` }}>
			{leftTitle && <Text className='nav_custom_bar_left_title'>{leftTitle}</Text>}
			{isBackIcon && (
				<Icon
					onClick={onBack}
					className='nav_custom_bar_back'
					color={backIconColor}
					name='arrow-left'
					size='22px'
				/>
			)}
			<Text style={{ color: titleColor, fontWeight: isWeight && "600" }} className='nav_custom_bar_title'>
				{title}
			</Text>
		</View>
	);
};
export default NavigationBar;

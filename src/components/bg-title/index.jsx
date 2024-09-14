import React from "react";
import "./index.less";
import { Text, View } from "@tarojs/components";
export default function BgTitle({ title, size }) {
	return (
		<Text className='stu-title' style={{ fontSize: size || "45rpx" }}>
			{title}
		</Text>
	);
}

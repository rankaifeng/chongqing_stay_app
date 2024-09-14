import React from "react";
import "./index.less";
import { Text, View } from "@tarojs/components";
export default function BgTitle({ title }) {
	return (
		<Text className='stu-title'>
			{title}
		</Text>
	);
}

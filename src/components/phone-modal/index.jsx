import { Button, View } from "@tarojs/components";
import React, { useState } from "react";
import { AtFloatLayout } from "taro-ui";
import "./index.less";
import Taro from "@tarojs/taro";
import { ActionSheet } from "@antmjs/vantui";
export default function PhoneModal({ phone, setPhone }) {
	const [actions] = useState([
		{
			name: "选项",
		},
		{
			name: "选项",
		},
		{
			name: "选项",
			subname: "描述信息",
			openType: "share",
		},
	]);
	return (
		<ActionSheet show={true} actions={actions} cancelText='取消' onClose={() => setPhone(undefined)} />

		// <View className="phone-layout">
		//   <AtFloatLayout isOpened={true} onClose={() => setPhone(undefined)}>
		//     <View
		//       onClick={() => {
		//         Taro.makePhoneCall({ phoneNumber: phone });
		//       }}
		//       className="phone"
		//     >
		//       呼叫：{phone}
		//     </View>
		//     <View className="cel" onClick={() => setPhone(undefined)}>
		//       取消
		//     </View>
		//   </AtFloatLayout>
		// </View>
	);
}

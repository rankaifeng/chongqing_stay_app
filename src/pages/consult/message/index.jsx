import React, { useEffect, useRef, useState } from "react";
import "./index.less";
import { Image, ScrollView, Text, View } from "@tarojs/components";
import NavigationBar from "../../../components/navigation-bar";
import { Field } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import iconImg from '../../../imgs/icon.png'
import { getContactInfoListDetail, contactInfoAdd } from "../../../api/globApi";
export default function Message() {
	const [value, setValue] = useState(undefined);
	const [messageList, setMessageList] = useState([]);
	const onSendMsg = () => {
		if (!value) {
			Taro.showToast({ title: "请输入内容", icon: "none" });
			return;
		}
		contactInfoAdd({ description: value }).then(res => {
			setValue(undefined);
			rquestMessageList();
		})
	};

	useEffect(() => {
		rquestMessageList();

		let time = setInterval(() => {
			rquestMessageList();
		}, 10000);

		return () => {
			clearInterval(time)
		}
	}, [])

	const rquestMessageList = () => {
		getContactInfoListDetail({ page: 1, limit: 100 }).then(res => {
			console.log(res);
			const { code, data } = res;
			if (code === 1) {
				if (data.length) {
					const mData = data.map(item => {
						return {
							time: item.create_time,
							content: item.description,
							img: item.send_user_type === 1 ? item.head_url : iconImg,
							isMe: item.send_user_type === 1,
						}
					})
					setMessageList(mData)
				} else {
					setMessageList([])
				}
			}
		})
	}
	return (
		<View className='message1'>
			<NavigationBar title='留言' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='message-content'>
				{messageList.length
					? messageList.map((item) => {
						return (
							<View className={item.isMe ? "message received" : "message sent"}>
								<View className='time'>{item.time}</View>
								<Image className='img' src={item.img} />
								<View class="content">
									<Text>{item.content}</Text>
								</View>
							</View>
						);
					})
					: null}
			</View>
			<View className='send-content'>
				<View className='send-input'>
					<Field
						autosize={{ minHeight: "20px" }}
						className='field-input'
						placeholder='说点什么吧·Say something'
						border={false}
						value={value}
						onChange={(e) => setValue(e.detail)}
					/>
				</View>
				<View className='send' onClick={onSendMsg}>
					发送
				</View>
			</View>
		</View>
	);
}

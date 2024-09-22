import React, { useState } from "react";
import "./index.less";
import { Image, View } from "@tarojs/components";
import NavigationBar from "../../../components/navigation-bar";
import { Field } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
export default function Message() {
	const [value, setValue] = useState(undefined);
	const [messageList, setMessageList] = useState([
		{
			time: "2023-02-11 12:23:11",
			content: "你好我是你爸爸",
			img: "https://img.yzcdn.cn/vant/cat.jpeg",
			isMe: true,
		},
		{
			time: "2023-02-11 12:23:11",
			content: "我打死你个龟儿",
			img: "https://img.yzcdn.cn/vant/cat.jpeg",
			isMe: false,
		},
	]);

	const onSendMsg = () => {
		if (!value) {
			Taro.showToast({ title: "请输入内容", icon: "none" });
			return;
		}

		setMessageList((con) =>
			con.concat({
				time: "2023-02-11 12:23:11",
				content: value,
				img: "https://img.yzcdn.cn/vant/cat.jpeg",
				isMe: true,
			})
		);
		setValue(undefined);
	};
	return (
		<View className='message'>
			<NavigationBar title='留言' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

			<View className='message-content'>
				{messageList.length
					? messageList.map((item) => {
							return (
								<View className={item.isMe ? "message-content-right" : "message-content-item"}>
									<View className='time'>{item.time}</View>
									{item.isMe ? (
										<>
											<Image className='item-img' src={item.img} />
											<View className='item-des'>{item.content}</View>
										</>
									) : (
										<View className='item-right'>
											<Image className='item-img' src={item.img} />
											<View className='item-des'>{item.content}</View>
										</View>
									)}
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
						type='textarea'
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

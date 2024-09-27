import { View } from "@tarojs/components";
import React, { useCallback, useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import { DatetimePicker, Image, Popup } from "@antmjs/vantui";
import oneImg from "../imgs/one.svg";
import twoImg from "../imgs/two.svg";
import threeImg from "../imgs/three.svg";
import fourImg from "../imgs/four.svg";
import fiveImg from "../imgs/five.svg";
import sixImg from "../imgs/six.svg";
import { applicationRecordInfoAdd } from "../api/globApi";
import Taro from "@tarojs/taro";

export default function ApplicationLetter() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth(); // 月份从0开始，所以加1
	const day = currentDate.getDate();
	const [type, setType] = useState(undefined);
	const [title, setTitle] = useState(undefined);
	const [tag, setTag] = useState(undefined)
	const [state, setState] = useState(() => {
		return {
			currentDate: new Date(year, month, day),
		};
	});

	const onDeineClick = () => {
		const mCurrentDate = timestampToDateFormat(state.currentDate)
		const mData = {
			down_type: type - 1,
			new_visa_date: mCurrentDate.replace(/-/g, ""),
		};
		applicationRecordInfoAdd(mData).then(res => {
			if (res.code === 1) {
				onOtherDeineClick();
				setType(undefined)
			} else {
				Taro.showToast({ title: res.msg, icon: 'none' })
			}
		})
	};
	function timestampToDateFormat(timestamp) {
		const dateObj = new Date(timestamp); // 创建Date对象
		const year = dateObj.getFullYear(); // 获取年份
		const month = ("0" + (dateObj.getMonth() + 1)).slice(-2); // 获取月份，并补零
		const day = ("0" + dateObj.getDate()).slice(-2); // 获取日期，并补零

		return `${year}-${month}-${day}`; // 返回转换后的日期格式
	}
	const onInput = useCallback(
		(event) => {
			setState({
				...state,
				currentDate: event.detail,
			});
		},
		[state]
	);
	const formatter = useCallback((type, value) => {
		if (type === "year") {
			return `${value}年`;
		}
		if (type === "month") {
			return `${value}月`;
		}
		return value;
	}, []);

	const onOtherDeineClick = () => {
		setTitle({
			name: "申请成功",
			name1: "申请成功！请联系学校相关工作人员打印盖章",
			des: "Application successful!Please contact the relevant school staffstaff to print and stamp your application",
		});
	};
	return (
		<View className='application-letter'>
			<NavigationBar title='申请公函' isBackIcon={true} backIconColor='#fff' titleColor='#fff' isWeight={600} />
			<View className='application-letter-content'>
				<View className='visa-c-item' onClick={() => setType(1)}>
					<Image src={oneImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请居留许可换发</View>
						<View className='visa-c-item-desc'>Application for renewal of residence permit</View>
					</View>
				</View>
				<View className='visa-c-item' onClick={() => setType(2)}>
					<Image src={twoImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请居留许可</View>
						<View className='visa-c-item-desc'>Application for a residence permit</View>
					</View>
				</View>
				<View className='visa-c-item' onClick={() => setType(3)}>
					<Image src={threeImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请居留许可延期</View>
						<View className='visa-c-item-desc'>Application for extension of residence permit</View>
					</View>
				</View>
				<View
					className='visa-c-item'
					onClick={() => {
						setTitle({
							name: "申请签证延期、换发",
							des: "Confirmation of the extension or renewal of this visa?",
						})
						setTag(7)
					}
					}>
					<Image src={fourImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请签证延期、换发</View>
						<View className='visa-c-item-desc'>Apply for Visa Extension and Replacement</View>
					</View>
				</View>
				<View
					className='visa-c-item'
					onClick={() => {
						setTitle({ name: "申请停留证件换发", des: "Confirmation of the exchange of this document?" })
						setTag(8)
					}
					}>
					<Image src={fiveImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请停留证件换发</View>
						<View className='visa-c-item-desc'>Application for renewal of stay documents</View>
					</View>
				</View>
				<View
					className='visa-c-item'
					onClick={() => {
						setTitle({ name: "申请停留证件", des: "Confirmation of the application for a stay document？" })
						setTag(9)
					}
					}>
					<Image src={sixImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请停留证件</View>
						<View className='visa-c-item-desc'>Application for a stay document</View>
					</View>
				</View>
			</View>

			<Popup
				className='application-letter-popup'
				position='bottom'
				show={type}
				onClose={() => setType(undefined)}>
				<View className='popup-title'>
					<View className='t'>有效期至·Valid until</View>
					<View onClick={onDeineClick} className='confirm-btn'>
						确定·Define
					</View>
				</View>
				<DatetimePicker
					value={state.currentDate}
					showToolbar={false}
					type='date'
					onInput={onInput}
					formatter={formatter}
				/>
			</Popup>

			<Popup
				className='application-letter-popup1'
				show={title}
				onClose={() => setTitle(undefined)}>
				<View className='popup-title'>{title?.name}</View>
				<View className='filed-c' onClick={() => setTitle(undefined)}>
					<View className='filed-c-item'>{title?.name1 || `确认${title?.name}?`}</View>
					<View className='filed-c-desc'>{title?.des}</View>
				</View>
				<View className='popup-btns'>
					<View onClick={() => {
						if (tag) {
							let tag1 = {
								"申请签证延期、换发": 3,
								"申请停留证件换发": 4,
								"申请停留证件": 5
							}
							applicationRecordInfoAdd({
								down_type: tag1[title?.name],
							}).then(res => {
								if (res.code === 1) {
									onOtherDeineClick();
									setTag(undefined)
								}
							})
						} else {
							setTitle(undefined)
						}
						setState({ currentDate: new Date(year, month, day) })
					}} className='confirm-btn' style={{ marginLeft: "15px" }}>
						确定·Define
					</View>
				</View>
			</Popup>
		</View>
	);
}

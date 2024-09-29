import { Dialog } from "@antmjs/vantui";
import React, { useEffect, useState } from "react";
import "./index.less";
import { RichText, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { employmentGuideRead } from "../../../api/globApi";
export default function MyDialog({ setDescription, description, type, id }) {

	const [show, setShow] = useState(true)

	useEffect(() => {
		if (!Taro.getStorageSync('token')) {
			if (type === 'internship') {
				setShow(!Taro.getStorageSync("internship"))
			} else if (type === 'commerce') {
				setShow(!Taro.getStorageSync("commerce"))
			} else if (type === 'collaborative') {
				setShow(!Taro.getStorageSync("collaborative"))
			}
			return;
		}
	}, [description])
	console.log(show);
	
	return (
		<Dialog
			className='vanDialog3'
			title='重要提示'
			showConfirmButton={false}
			showCancelButton={false}
			closeOnClickOverlay={false}
			show={show}>
			<View className='dialog-content'>
				<View className='dialog-des'>
					<RichText nodes={description} />
				</View>

				<View className='sure' onClick={() => {
					setDescription(undefined);
					Taro.setStorageSync(type, 1);
					employmentGuideRead({ id }).then(res => {
						console.log(res)
					})

				}}>
					我已经知晓并同意·consent
				</View>
				<View
					className='fail'
					onClick={() => {
						Taro.navigateBack();
						Taro.removeStorageSync(type);
						setDescription(undefined);
					}}>
					不同意·Disagree
				</View>
			</View>
		</Dialog>
	);
}

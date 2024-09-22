import { Dialog } from "@antmjs/vantui";
import React from "react";
import "./index.less";
import { RichText, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
export default function MyDialog({ setDescription, description }) {

	return (
		<Dialog
			className='vanDialog3'
			title='重要提示'
			showConfirmButton={false}
			showCancelButton={false}
			closeOnClickOverlay={false}
			show={true}>
			<View className='dialog-content'>
				<View className='dialog-des'>
					<RichText nodes={description} />
				</View>

				<View className='sure' onClick={() => setDescription(undefined)}>
					我已经知晓并同意·consent
				</View>
				<View
					className='fail'
					onClick={() => {
						Taro.navigateBack();
						setDescription(undefined);
					}}>
					不同意·Disagree
				</View>
			</View>
		</Dialog>
	);
}

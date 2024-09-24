import { Image, View } from "@tarojs/components";
import React, { useState } from "react";
import "./index.less";
import NavigationBar from "../components/navigation-bar";
import teBgImg from "../imgs/te-bg.svg";
import pBgImg from "../imgs/p-bg.png";
import scanImg from "../imgs/san.svg";
import numberImg from "../imgs/number.svg";
import qianImg from "../imgs/qianzi.svg";
import gongImg from "../imgs/gonghan.svg";
import DigitalCheckIn from "./digital-check-in";
import Taro from "@tarojs/taro";
import { ActionSheet, Dialog } from "@antmjs/vantui";
import apiConfig from '../server/baseUrl';
import { fileUpload, uploadFile } from "../api/globApi";
export default function VisaExtension() {
	const [show, setShow] = useState(false);
	const [sheetShow, setSheetShow] = useState(false)
	const [diagShow, setDiagShow] = useState(false)
	return (
		<View className='visa-extension'>
			<NavigationBar title='签证延期' isBackIcon={true} backIconColor='#fff' titleColor='#fff' isWeight={600} />
			<Image src={teBgImg} className='te-bg' style={{ width: "176px", height: "124px" }} />
			<Image src={pBgImg} className='te-p' style={{ width: "172px", height: "164px" }} />

			<View className='visa-content'>
				<View className='visa-c-item'>
					<Image src={scanImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>扫码签到</View>
						<View className='visa-c-item-desc'>Swipe to sign in</View>
					</View>
				</View>
				<View className='visa-c-item' onClick={() => setShow(true)}>
					<Image src={numberImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>数字签到</View>
						<View className='visa-c-item-desc'>Digital sign-on</View>
					</View>
				</View>
				<View className='visa-c-item' onClick={() => setSheetShow(true)}>
					<Image src={qianImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>签证申请表</View>
						<View className='visa-c-item-desc'>Visa Application Form</View>
					</View>
				</View>
				<View className='visa-c-item' onClick={() => Taro.navigateTo({ url: "/application-letter/index" })}>
					<Image src={gongImg} className='san-img' />
					<View className='visa-c-item-right'>
						<View className='visa-c-item-title'>申请工函</View>
						<View className='visa-c-item-desc'>Request for a work permit</View>
					</View>
				</View>
			</View>

			{show && <DigitalCheckIn show={show} setShow={setShow} />}



			<ActionSheet
				cancelText='取消'
				show={sheetShow}
				showCancelButton={false}
				onCancel={() => {
					setSheetShow(false)

				}}
				onSelect={(e) => {
					if (e.detail.name === '下载模板') {
						setDiagShow(true)
					} else {
						Taro.chooseMessageFile({
							type: 'file',
							count: 1,
							success: res => {
								const mPath = res.tempFiles[0].path
								fileUpload({ file_value: mPath, file_type: 3 }).then(res => {
									console.log(res);
									uploadFile({ url: res.data[0].file_url }).then(res => {
										Taro.showToast({ title: res.msg, icon: 'none' })
										setDiagShow(false)
										setSheetShow(false)
									})
								})
							}
						})
					}

				}}
				actions={[
					{
						name: `下载模板`,
					}, {
						name: `上传模板`,
					},
				]}
			/>
			<Dialog
				title="提示"
				showCancelButton
				confirmButtonText="复制链接"
				show={diagShow}
				onClose={() => {
					setDiagShow(false)
					setSheetShow(false)
				}}
				onConfirm={() => {
					Taro.setClipboardData({
						data: `${apiConfig.baseUrl}/base_manage/file_info/file_info_download_visa_application`,
						success: res => {
							setDiagShow(false)
							setSheetShow(false)
						}
					})
				}}
			>
				<View style={{ color: 'gray', textAlign: 'center', padding: '10px' }}>您需要复制docx链接,在浏览器中打开并下载文件。</View>
			</Dialog>
		</View>
	);
}

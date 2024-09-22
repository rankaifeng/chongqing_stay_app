import { Text, View } from "@tarojs/components";
import React from "react";
import "../index.less";
import NavigationBar from "../../components/navigation-bar";
import StatusBtn from "../../components/status-btn";
import BgTitle from "../../components/bg-title";
import Taro from "@tarojs/taro";
export default function ActiveRecordDetail() {
	const dataDetail = Taro.getCurrentInstance().preloadData.data;

	return (
		<View className='active-record' style={{ height: "auto" }}>
			<NavigationBar title='详情' isBackIcon={true} isWeight={true} titleColor='#000' backIconColor='#000' />
			<View className='active-record-item'>
				<BgTitle title='申请信息' size='16px' />
				<Text className='other-title'>·Application Lnformation</Text>
				<View className='content'>
					<View className='status-content'>
						<StatusBtn status={dataDetail.subscribe_status} />
					</View>
					<Text className='content-title'>申请理由·Rationale</Text>
					<View className='content-text'>{dataDetail.mark}</View>
					<Text className='content-title'>活动日期·Event Date</Text>
					<View className='content-text'>{dataDetail.participation_time}</View>
					<Text className='content-title'>报名时间·Enrollment Time</Text>
					<View className='content-text'>{dataDetail.create_time}</View>
				</View>

				<View className='tip' style={{ marginTop: "20px" }}>
					<BgTitle title='提示' size='16px' />
					<Text className='other-title'>·Tip</Text>
					<View className='tip-content'>
						<View>如长时间未审核可联系主办方确认情况</View>
						<View className='tip-text'>
							Contact the organisers to confirm the situation if you have not been reviewed for a long
							time.
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

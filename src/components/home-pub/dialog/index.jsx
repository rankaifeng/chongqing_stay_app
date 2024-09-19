import { Dialog } from "@antmjs/vantui";
import React from "react";
import "./index.less";
import { View } from "@tarojs/components";
export default function MyDialog({ show, setShow }) {
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
					1.
					外国留学生校外实习活动，是指外国留学生按照学校教育教学计划组织实施的，不获取劳动报酬（必要的生活补贴除外）的校外学习实践活动。
					2. 申请从事校外实习活动的外国留学生，应符合以下条件：
					①在本市具备外国留学生招生资质学校就学的学历生（非学历生除外）；
					②持有重庆市公安局出入境管理局签发的学习类居留证件； ③不得同时在两个（含）以上单位从事校外实习活动；
					④实习内容应和本人学习专业有关。 3.
					外国留学生从事校外实习活动前，应向学校留学生管理部门提交校外实习申请。 4.
					未办理加注“实习”类居留许可或超越“加注实习类居留许可”上所载明时间、地址、单位等范围的实习活动的非法就业行为，公安机关将根据有关法律法规对违法者进行处罚。
				</View>

				<View className='sure' onClick={() => setShow(false)}>
					我已经知晓并同意·consent
				</View>
				<View
					className='fail'
					onClick={() => {
						Taro.navigateBack();
						setShow(false);
					}}>
					不同意·Disagree
				</View>
			</View>
		</Dialog>
	);
}

import React, { useCallback, useState } from "react";
import "./index.less";
import { Popup } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { Input, View } from "@tarojs/components";

export default function DigitalCheckIn({ show, setShow }) {
	const [oneInput, setOneInput] = useState(undefined);
	const [twoInput, setTwoInput] = useState(undefined);
	const [threeInput, setThreeInput] = useState(undefined);
	const [fourInput, setFourInput] = useState(undefined);
	const [fiveInput, setFiveInput] = useState(undefined);
	const [sixInput, setSixInput] = useState(undefined);

	const onDeineClick = useCallback(() => {
		if (!oneInput || !twoInput || !threeInput || !fourInput || !fiveInput || !sixInput) {
			Taro.showToast({ title: "请输入完整验证码", icon: "none" });
			return;
		}
		setShow(false);
	});

	return (
		<Popup closeOnClickOverlay={false} className='digital-check-in' show={show} onClose={() => setShow(false)}>
			<View className='popup-title'>数字签到·Digital sign-on</View>
			<View className='filed-c'>
				<Input maxlength={1} type='number' value={oneInput} onInput={(e) => setOneInput(e.detail.value)} />
				<Input maxlength={1} type='number' value={twoInput} onInput={(e) => setTwoInput(e.detail.value)} />
				<Input maxlength={1} type='number' value={threeInput} onInput={(e) => setThreeInput(e.detail.value)} />
				<Input maxlength={1} type='number' value={fourInput} onInput={(e) => setFourInput(e.detail.value)} />
				<Input maxlength={1} type='number' value={fiveInput} onInput={(e) => setFiveInput(e.detail.value)} />
				<Input maxlength={1} type='number' value={sixInput} onInput={(e) => setSixInput(e.detail.value)} />
			</View>
			<View className='popup-btns'>
				<View className='cancel-btn' onClick={() => setShow(false)}>
					取消·Cancel
				</View>
				<View onClick={onDeineClick} className='confirm-btn' style={{ marginLeft: "15px" }}>
					确定·Define
				</View>
			</View>
		</Popup>
	);
}

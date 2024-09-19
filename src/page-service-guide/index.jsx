import { View } from "@tarojs/components";
import React from "react";
import NavigationBar from "../components/navigation-bar";
import './index.less'
export default function PageServiceGuide() {
	return (
		<View className='page-service-guide'>
			<NavigationBar title='办事指南' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />
		
            <View className="service-guide-content">
                
            </View>
        </View>
	);
}

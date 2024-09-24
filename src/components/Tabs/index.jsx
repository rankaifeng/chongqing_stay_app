import { View } from "@tarojs/components";
import './index.less'
import NavigationBar from "../navigation-bar";
const Tabs = () => {

    return <View className="tabs" style={{ height: "100vh", background: 'gray' }}>

        <NavigationBar title='办事指南' isBackIcon={true} backIconColor='#000' titleColor='#000' isWeight={600} />

        <View className="tab-list">

            <View className="tab-item">111</View>
            <View className="tab-item tab-selected">222</View>
        </View>
    </View>

}

export default Tabs
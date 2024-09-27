import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';

export default function useBarHeight() {

    const [navBarHeight, setNavBarHeight] = useState(0);

    useEffect(() => {
        getNavHeight();
    }, []);

    const getNavHeight = () => {
        let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
        var sysinfo = Taro.getSystemInfoSync();
        let statusBarHeight = sysinfo.statusBarHeight;
        let menuBottonHeight = menuButtonObject.height;
        let menuBottonTop = menuButtonObject.top;
        let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2;
        setNavBarHeight(navBarHeight);
    };

    return { navBarHeight }
}

import { useState, useRef, useEffect } from "react";
import { PullToRefresh, InfiniteScroll, Empty } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import MyLoading from "../my-loading";

/**
 * 下拉刷新 上拉加载更多列表
 * @param {*} param0
 * @returns renderItem 当前的item
 * @returns getList 请求列表数据
 * @returns defaultFilter 默认的筛选条件
 */
export default function RefreshList({
	renderItem,
	getList,
	defaultFilter,
	otherData,
	loading,
	setOtherData,
	isLoad,
	setIsLoad,
	setLoading,
}) {
	const [data, setData] = useState([]);
	const InfiniteScrollInstance = useRef();
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (otherData || isLoad) {
			setData([]);
			onRefresh();
		}
	}, [otherData, isLoad]);
	/**
	 * 上拉加载更多
	 * @returns
	 */
	const loadMore = () => {
		let mPage = page;
		mPage++;
		return requestData(mPage, "load-more");
	};

	/**
	 * 请求接口数据拿到list
	 * @param {*} p 当前页码
	 * @param {*} type 刷新 加载更多的标识
	 * @returns
	 */
	const requestData = (p, type) => {
		if (getList) {
			return new Promise(async (resolve) => {
				const reslult = await getList({ page: p, limit: 10, ...defaultFilter, ...otherData });
				if (setOtherData) setOtherData(undefined);
				if (setIsLoad) setIsLoad(false);
				if (setLoading) setLoading(false);
				if (reslult.code === 1) {
					let mData = [];
					if (type === "load-more") {
						mData = data.concat(reslult.data);
						resolve(
							reslult.data.length === 0 || reslult.num < 10 || reslult.data.length < 10
								? "complete"
								: "loading"
						);
					} else {
						mData = reslult.data;
						if (mData.length > 8) InfiniteScrollInstance.current?.reset();
						resolve(undefined);
					}
					setData(mData);
					setPage(p);
				} else {
					Taro.showToast({ title: reslult.msg, icon: "none" });
					resolve(undefined);
					setPage(p);
				}
			});
		}
	};
	/**
	 * 下拉刷新
	 * @returns
	 */
	const onRefresh = () => requestData(1, "refresh");

	return (
		<PullToRefresh onRefresh={onRefresh}>
			{data.map((item, index) => renderItem(item, index))}
			<InfiniteScroll completeText='' loadMore={loadMore} ref={InfiniteScrollInstance} />

			{(loading || isLoad) && <MyLoading />}

			{data.length === 0 && <Empty description='暂无数据' />}
		</PullToRefresh>
	);
}

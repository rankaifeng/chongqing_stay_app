import { View } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import { AtButton, AtImagePicker } from "taro-ui";
import "./index.less";
import Myloading from "../components/my-loading";
import { fileUpload, innovationEntrepreneurship } from "../api/globApi";
import Taro from "@tarojs/taro";
export default function Innovation() {
  const [menus, setMenus] = useState([
    {
      name: "申请表",
      files: [],
    },
    {
      name: "护照首页和有效签证页原件、复印件",
      files: [],
    },
    {
      name: "住所使用相关文件",
      files: [],
    },
    {
      name: "创业计划",
      files: [],
    },
    {
      name: "毕业证书原件及复印件",
      files: [],
    },
    {
      name: "公司章程等相关文件",
      files: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const onChange = (files, p) => {
    console.log(files);
    fileUpload({ file_value: files[0].url, file_type: 1 }).then((res) => {
      const m = [...menus];
      m[p].files = m[p].files.concat({ url: res.data });
      setMenus(m);
    });
  };

  const onSureClick = () => {
    if (menus.length) {
      setLoading(true);
      innovationEntrepreneurship({ files: JSON.stringify(menus) })
        .then((res) => {
          Taro.showToast({ title: res.msg, icon: "none" });
          if (res.code === 1) {
            setTimeout(() => {
              Taro.navigateBack();
            }, 1000);
          }
        })
        .finally((e) => setLoading(false));
    }
  };
  return (
    <View className="innovation">
      <View className="in-ov">
        {menus.map((item, index) => {
          return (
            <View>
              <View className="innovation-title">{item.name}</View>
              <AtImagePicker
                showAddBtn={item.files.length >= 3 ? false : true}
                files={item.files}
                onChange={(f) => onChange(f, index)}
              />
            </View>
          );
        })}
      </View>
      <View className="in-ov-btn">
        <AtButton type="primary" onClick={onSureClick}>
          确定申请
        </AtButton>
      </View>
      {loading && <Myloading />}
    </View>
  );
}

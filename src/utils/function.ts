import axios from "axios";
import apiUrl from "./apiUrl";
import { message } from "antd";
import { AdminUserModels } from "../models/models";

function request(
  action: string,
  data: {},
  success: CallableFunction,
  method: any = "POST"
) {
  axios({
    method: method,
    url: apiUrl.apiUrl + action,
    data: data,
    headers: {
      "Content-Type": "application/form-data; charset=utf-8",
    },
  })
    .then((res) => {
      if (res.data.code === 1) {
        success(res.data);
      } else {
        message.error(res.data.msg || "未知错误");
      }
    })
    .catch((err) => {
      message.error(JSON.stringify(err));
    });
}

//获取管理员列表
export const getAdminListApi = (success: CallableFunction): void => {
  request(apiUrl.getAdminList, {}, success, "GET");
};

//添加管理员列表
export const addAdminApi = (
  data: AdminUserModels,
  success: CallableFunction
): void => {
  request(apiUrl.addAdmin, data, success);
};

//删除指定管理员
export const deleteAdminApi = (id: number, success: CallableFunction): void => {
  request(apiUrl.deleteAdmin, { id }, success);
};

//修改管理员的
export const changeAdminApi = (
  data: AdminUserModels,
  success: CallableFunction
): void => {
  request(apiUrl.changeAdmin, data, success);
};

//获取会员列表
export const getMemberListApi = (success: CallableFunction) => {
  request(apiUrl.getMemberList, {}, success, "GET");
};

//拉黑和恢复会员
export const pullBlackMemberApi = (
  id: number,
  state: number,
  success: CallableFunction
) => {
  request(apiUrl.pullBlackMember, { id, state }, success);
};

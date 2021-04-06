import axios from "axios"
import apiUrl from "./apiUrl"
import {AdminUserModels} from "../models/models"

function request(action: string,data:{},success:CallableFunction, method:any="POST") {
  axios({
    method: method,
    url: apiUrl.apiUrl + action,
    data:data,

  }).then((res)=>{
    
    success(res.data);
  }).catch(()=>{
    
  })
}

//获取管理员列表
export const getAdminList=(success:CallableFunction):void=>{
  request(apiUrl.getAdminList, {}, success,"GET");
}

//添加管理员列表
export const addAdmin = (data: AdminUserModels, success: CallableFunction): void => {
  request(apiUrl.addAdmin, data, success);
};
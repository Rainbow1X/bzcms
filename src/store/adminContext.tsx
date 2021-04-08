import React,{createContext,useReducer} from "react"

import {AdminUserModels} from "../models/models"

type StateType = {
  curAdmin:AdminUserModels
}

type ActionType={
  type:string,
  payload:any
}



//默认值
let defaultState={
  curAdmin:{
    nickname:'',
    state:0,
    username:''
  }
}

const SET_EDIT_ADMIN:string="SET_EDIT_ADMIN"
export const AdminContext = createContext({})


const reducer=(state:StateType,action:ActionType)=>{
  switch(action.type){
    case SET_EDIT_ADMIN:
      return {...state,curAdmin:action['payload']}
    default:
      return state
  }
}

export const AdminProvide=(props:any)=>{
  const [state,dispatch]= useReducer(reducer,defaultState)
  return <AdminContext.Provider value={{state,dispatch}}>{props.children}</AdminContext.Provider>;
}
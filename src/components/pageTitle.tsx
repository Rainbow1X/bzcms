import React from "react"
import {Breadcrumb}from "antd"
import "./style.scss"
interface childProps {
  title:string
}
const PageTitle:React.FC<childProps>=(props)=>{
  const {title} = props
    return(
      <div className="pageHeader">
          <h3>{title}</h3>
          <Breadcrumb>
              <Breadcrumb.Item><a href="/">控制面板</a></Breadcrumb.Item>
              <Breadcrumb.Item><span>{title}</span></Breadcrumb.Item>
          </Breadcrumb>
      </div>
    )
}

export default PageTitle
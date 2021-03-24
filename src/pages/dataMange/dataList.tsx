import PageTitle from "../../components/pageTitle"
import LeftCateBox from "./components/leftCateBox"
import RightTable from "./components/rightTable"
import React from "react"
import "./style.scss"
function DataList(){
  return(
    <div className="pageContent">
        <PageTitle title="资源列表"/>
        <div className="pageMain dataListBody">
         <div className="leftCateBox">
           <LeftCateBox/>
         </div>
         <div className="rightTable">
            <RightTable/>
         </div>
        </div>
      </div>
  ); 
}
export default DataList
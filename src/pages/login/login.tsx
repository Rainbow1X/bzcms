import "./style.scss"
import React,{useState} from "react"
function Login(){
  const [lightIndex,setIndex] = useState(0)
  return (
    <div className="loginPage">
      <div className="bg-img"></div>
      <div className="loginForm">
        <form>
          <div className={lightIndex===1?"input_wrapper input_wrapper_focus":"input_wrapper"  }>
           <i className="fa fa-user-o fa-fw"></i>
           <input name="userName" placeholder="用户名" onFocus={()=>{ setIndex(1)}} onBlur={()=>{ setIndex(0)}}/>
          </div>
          <div className={lightIndex===2?"input_wrapper_focus input_wrapper":"input_wrapper"  }>
            <i className="fa fa-key fa-fw"></i>
            <input name="password" placeholder="密码" type="password" onFocus={()=>{ setIndex(2)}} onBlur={()=>{ setIndex(0)}}/>
          </div>
          <div style={{marginTop:40}}>
            <button className="loginBtn">登录</button>
          </div>
        </form>
      </div>
    </div>
  )
}




export default Login

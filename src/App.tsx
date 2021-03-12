import {HashRouter,Route,Switch} from "react-router-dom"
import routers from "./routers"
import 'antd/dist/antd.css';

function App() {
  return (
   <HashRouter>
     <Switch>
       {
        routers.map(item=>{
          if (item.exac){
            return <Route path={item.path} component={item.component} key={item.path}></Route>
          }else{
            return <Route path={item.path} component={item.component} key={item.path}></Route>
          }
        })
      }
     </Switch>
   </HashRouter>
  );

}

export default App;

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
            return <Route path={item.ptah} component={item.component} exact key={item.ptah}></Route>
          }else{
            return <Route path={item.ptah} component={item.component} key={item.ptah}></Route>
          }
        })
      }
     </Switch>
   </HashRouter>
  );

}

export default App;

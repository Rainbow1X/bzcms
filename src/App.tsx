import {HashRouter,Route,Switch} from "react-router-dom"
import routers from "./routers"
import 'antd/dist/antd.css';

function App() {
  return (
   <HashRouter>
     <Switch>
       {
        routers.map(item=>{
            return <Route path={item.path} component={item.component} key={item.path} exact={item.exac}></Route>
        })
      }
     </Switch>
   </HashRouter>
  );

}

export default App;

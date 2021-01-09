import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Achievements from './Achievements';
import Blogs from './Blogs';
import Info from './Info';
import LandingPage from './LandingPage'
import Skills from './Skills';
import YouTube from './YouTube';


const Main=()=>{
    return(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/youtube" component={YouTube}/>
        <Route exact path="/projects" component={Achievements}/>
        <Route exact path="/info" component={Info}/>
        <Route exact path="/blog" component={Blogs}/>


    </Switch>
    );
}
export default Main
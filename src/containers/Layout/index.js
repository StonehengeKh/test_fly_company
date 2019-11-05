import React from "react"
import {Switch, Route} from "react-router"

import FlyBlocks from "../FlyBlocks"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import "./layout.css"

const Routes = (
    <Switch>
        <Route path="/" component={FlyBlocks} exact/>
    </Switch>
)

const Layout = () => (
    <div className="block">
        <div className="block-header">
            <Header />
        </div>
        <div className="block-main">
            <div className="block-sidebar">
                <Sidebar />
            </div>
            <div className="block-fly">
                {Routes}
            </div>
        </div>
    </div>
)

export default Layout
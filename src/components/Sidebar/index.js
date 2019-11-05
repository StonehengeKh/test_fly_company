import React from "react"

import "./sidebar.css"
import BtnsBlock from "../BtnBlock";
import RadioBlock from "../RadioBlock"

const Sidebar = () => (
    <div className="block-sidebar">
        <div className="block-visual">
            <div>
                <BtnsBlock />
            </div>
            <div>
                <RadioBlock />
            </div>
        </div>

    </div>
)

export default Sidebar
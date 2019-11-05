import React, {useState} from "react"
import {connect} from "react-redux"

import {changeStops} from "../../actions"
import "./radioBlock.css"

const RadioBlock = ({changeStops}) => {
    const [currentValue, setValue] = useState([])
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleChangeForm = (event) => {
        event.preventDefault()
        changeStops(currentValue)
    }

        return (
            <div className="block-radio">
                <span className="title">Количество пересадок</span>
                <div className="radio">
                    <form onChange={handleChangeForm}>
                        <div className="block-col">
                            <div className="stops-block">
                                <input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value="all"
                                    id="all"
                                    name="all"
                                    className="checkbox"
                                />
                                <label className="check" htmlFor="all" />
                                <span className="stop">Все</span>
                            </div>
                        </div>
                        <div className="block-col">
                            <div className="stops-block">
                                <input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value="0"
                                    id="not"
                                    name="not"
                                    className="checkbox"
                                />
                                <label className="check" htmlFor="not" />
                                <span className="stop">Без пересадок</span>
                            </div>
                            <span className="only">ТОЛЬКО</span>
                        </div>
                        <div className="block-col">
                            <div className="stops-block">
                                <input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value="1"
                                    id="one"
                                    name="one"
                                    className="checkbox"
                                />
                                <label className="check" htmlFor="one" />
                                <span className="stop">1 пересадка</span>
                            </div>
                            <span className="only">ТОЛЬКО</span>
                        </div>
                        <div className="block-col">
                            <div className="stops-block">
                                <input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value="2"
                                    id="two"
                                    name="two"
                                    className="checkbox"
                                />
                                <label className="check" htmlFor="two" />
                                <span className="stop">2 пересадки</span>
                            </div>
                            <span className="only">ТОЛЬКО</span>
                        </div>
                        <div className="block-col">
                            <div className="stops-block">
                                <input
                                    type="checkbox"
                                    onChange={handleChange}
                                    value="3"
                                    id="three"
                                    name="three"
                                    className="checkbox"
                                />
                                <label className="check" htmlFor="three" />
                                <span className="stop">3 пересадки</span>
                            </div>
                            <span className="only">ТОЛЬКО</span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

const mapStateToProps = {
    changeStops
}

export default connect (null, mapStateToProps)(RadioBlock)
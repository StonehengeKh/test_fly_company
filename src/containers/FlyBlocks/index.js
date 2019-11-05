import React, {useEffect} from "react"
import {connect} from "react-redux"

import {fetchFlyBlocks} from "../../actions";
import {getFlyBlocks} from "../../selectors";
import logo from "../../assets/ta.png"
import "./flyBlocks.css"

const FlyBlocks = ({fetchFlyBlocks, flyBlocks}) => {
    useEffect(() => {
        fetchFlyBlocks()
    }, [])

   const renderFlyBlocks = (flyBlocks, index) => {
        return (
            <div className="all-blocks" key={index}>
                <div className="block-fly" key={index}>
                    <div className="block-left">
                        <div className="block-name">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <div className="block-btn">
                            <span className="text-btn">Купить</span>
                            <span className="text-btn">за {flyBlocks.price.toLocaleString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} ₽</span>
                        </div>
                    </div>
                    <div className="block-right">
                        <div className="block-top">
                            <div className="dep-time">
                                <span>{flyBlocks.departure_time}</span>
                            </div>
                            <div className="stops">
                                {flyBlocks.stops > 0 ?
                                    <span className="view-fly">{flyBlocks.stops} пересадк{flyBlocks.stops === 1 ? "а" : "и"}</span> :
                                        <span className="not-view-fly">{flyBlocks.stops}</span>}
                                <div className="block-line">
                                    <hr className="line" />
                                    <span>✈</span>
                                </div>
                            </div>
                            <div className="arr-time">
                                <span>{flyBlocks.arrival_time}</span>
                            </div>
                        </div>
                        <div className="block-center">
                            <div>
                                <span>{flyBlocks.origin}, {flyBlocks.origin_name}</span>
                            </div>
                            <div>
                                <span>{flyBlocks.destination_name}, {flyBlocks.destination}</span>
                            </div>
                        </div>
                        <div className="block-bottom">
                            <div className="dep-date">
                                <span>{flyBlocks.departure_date}</span>
                            </div>
                            <div className="arr-date">
                                <span>{flyBlocks.arrival_date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        return (
            <div>
                {flyBlocks.map((flyBlocks, index) => renderFlyBlocks(flyBlocks, index))}
            </div>
        )
    }

const mapStateToProps = state => ({
    flyBlocks: getFlyBlocks(state)
})

const mapDispatchToProps = {
    fetchFlyBlocks
}

export default connect (mapStateToProps, mapDispatchToProps)(FlyBlocks)
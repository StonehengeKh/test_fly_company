import React, {useState} from "react"

import "./btnsBlock.css"

const BtnsBlock = () => {
    const [currency, setCurrency] = useState("rub")

        return (
        <div className="block-btns">
            <span>Валюта</span>
            <div className="btn-val">
                <button
                    onClick={() => setCurrency('rub')}
                    className={`btn-rub ${currency === "rub" ? "btn-active" : "btn-not-active"}`}
                >RUB</button>
                <button
                    onClick={() => setCurrency('usd')}
                    className={`btn-usd ${currency === "usd" ? "btn-active" : "btn-not-active"}`}
                >USD</button>
                <button
                    onClick={() => setCurrency('eur')}
                    className={`btn-eur ${currency === "eur" ? "btn-active" : "btn-not-active"}`}
                >EUR</button>
            </div>
        </div>
        );
}

export default BtnsBlock
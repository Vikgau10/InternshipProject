import React from 'react'

export const Currency = () => {
    return (
        <div className="currency-main">
            <span className="top">Best Price To Trade</span>

            <div className="mid">

                <div>
                    <h2>0.56%</h2>
                    <span className="mid-span">5 Mins</span>
                </div>

                <div>
                    <h2>0.56%</h2>
                    <span className="mid-span">1 Hour</span>
                </div>

                <div>
                    <h2 id="price"><span></span>28,79,432</h2>
                    
                </div>

                <div>
                    <h2>0.56%</h2>
                    <span className="mid-span">7 Day</span>
                </div>

                <div>
                    <h2>0.56%</h2>
                    <span className="mid-span">7 Days</span>
                </div>

                <span className="last">Average BTC/INR net price including commission</span>


            </div>
        </div>
    )
}

import React from "react"

const Rank = ({ name, entries }) => {
    return (
        <div className="text-center m-6">
            <div className="white text-lg">
                {`${ name }, your current entries is...`}
            </div>
            <div className="white text-2xl">
                { entries }
            </div>
        </div>
    )
}

export default Rank

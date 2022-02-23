import React from "react";

import Tilt from 'react-parallax-tilt';

import face from "./face-recognition.png"


const Logo = () => {
    return (
        <div>
            <Tilt className="px-6">
                <div style={{ height: '150px', width: '150px' }}>
                    <img src={ face } alt="logo" className="pt-2 w-16"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
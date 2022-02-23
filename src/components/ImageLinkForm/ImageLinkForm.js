import React from "react"


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="text-lg mb-6">
                { "This Magic Brain will Detect faces in your pictures.Give it a try" }
            </p>
            <div className="flex justify-center w-6/12 p-4 drop-shadow-xl rounded-lg">
                <input className="text-xl p-2 w-9/12 mx-auto" type="tex" onChange={ onInputChange }/>
                <button 
                    className="w-3/12 text-xl px-3 py-2 inline-block white bg-purple-700" 
                    onClick={ onButtonSubmit }
                >
                    Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm

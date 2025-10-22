import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flashcard ${isFlipped ? "flipped" : ""}`}
            onClick={handleClick}>
            <div className='card-content'>
                <div className='card-front'>
                    <h2 className='word'>Coupling</h2>
                </div>
                <div className='card-back'>
                    <h2 className='definition'>
                        The degree of interdependence between software modules
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;

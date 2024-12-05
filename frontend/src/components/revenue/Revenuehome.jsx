import { useState } from 'react';
import Popup from './popup';

function Revenuehome() {
    const [showPopup, setShowPopup] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleKnowMore = () => {
        setShowPopup(false); // Close popup
        setShowButton(false); // Hide button
        window.location.href = '/plans'; // Redirect immediately
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {showButton && (
                <button
                    onClick={handleClick}
                    className="px-8 py-3 bg-[#7209b7] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#5f32ad] focus:outline-none"
                >
                    More Success Ahead
                </button>
            )}

            {showPopup && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <Popup
                        message="You have reached the limit of 10 job applications. To enjoy unlimited job applications, check out our premium subscription."
                        onClose={handleClosePopup}
                        onKnowMore={handleKnowMore}
                    />
                </div>
            )}
        </div>
    );
}

export default Revenuehome;

/* eslint-disable react/prop-types */

const Popup = ({ message, onClose, onKnowMore }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-[#003366] to-[#000000] p-6 rounded-xl text-center shadow-lg max-w-lg w-11/12 animate-slideIn">
        <span
          className="absolute top-2 right-4 text-white text-2xl cursor-pointer transition-transform duration-200 transform hover:scale-125"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-2xl text-white mb-2">Limit Reached</h2>
        <p className="text-lg text-gray-300 mb-5">{message}</p>
        <div className="flex justify-center gap-3">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 transform hover:scale-105"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-600 transform hover:scale-105"
            onClick={onKnowMore}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

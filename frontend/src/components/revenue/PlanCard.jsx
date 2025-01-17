/* eslint-disable react/prop-types */


const PlanCard = ({ title, description, price, className, onCheckoutClick }) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${className} hover:scale-105 hover:translate-y-[-15px] hover:shadow-xl hover:ring-4 hover:ring-blue-400 max-w-xs mx-auto`}
        >
            <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>
            <p className="text-gray-300 mb-4 text-lg">{description}</p>
            <p className="text-xl font-bold mb-6 text-white">₹{price}/month</p>
            <button
                className="w-full py-3 px-6 rounded-full bg-blue-600 text-white text-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                onClick={() => onCheckoutClick(price)}
            >
                Get started
            </button>
        </div>  
    );
};

export default PlanCard;

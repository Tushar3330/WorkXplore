/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Button } from '../ui/button';

const PlanCard = ({ title, description, price, className }) => (
    <div className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${className} hover:scale-105 hover:translate-y-[-15px] hover:shadow-xl hover:ring-4 hover:ring-blue-400 max-w-xs mx-auto`}>
        <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>
        <p className="text-gray-300 mb-4 text-lg">{description}</p>
        <p className="text-xl font-bold mb-6 text-white">₹{price}/month</p>
        <Button className="w-full py-3 px-6 rounded-full bg-blue-600 text-white text-lg hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Get started
        </Button>
    </div>
);

const Plans = () => {
    useEffect(() => {
        // Force a reflow of the CSS
        const forceReflow = () => {
            document.body.style.display = 'none';
            document.body.offsetHeight; // Trigger reflow
            document.body.style.display = '';
        };
        forceReflow();
    }, []);

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-40"></div>
            <div className="relative z-50 py-16 px-6 text-center">
                <h1 className="text-5xl font-extrabold text-white mb-12 animate__animated animate__fadeInUp">Choose Your Plan</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PlanCard 
                        title="Silver Plan" 
                        description="Basic benefits and features"
                        price="500" 
                        className="bg-gradient-to-r from-gray-600 to-gray-400 shadow-lg"
                    />
                    <PlanCard 
                        title="Gold Plan" 
                        description="Extended benefits and features" 
                        price="1000" 
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg"
                    />
                    <PlanCard 
                        title="Platinum Plan" 
                        description="All benefits and features" 
                        price="1500" 
                        className="bg-gradient-to-r from-teal-500 to-teal-700 shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Plans;

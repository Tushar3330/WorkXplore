import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import PlanCard from './PlanCard'; // assuming PlanCard is in a separate file

const Plans = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState(null); // Store the selected plan price

    const handleCheckout = async (selectedPrice) => {
        setPrice(selectedPrice); // Store the selected plan's price
        if (!stripe || !elements) return; // Stripe not ready
        setLoading(true);

        try {
            // Send price to backend to create a payment intent
            const response = await fetch('http://localhost:3000/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: selectedPrice * 100 }), // price in cents
            });

            const { clientSecret } = await response.json();

            // Confirm card payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                alert(`Payment failed: ${result.error.message}`);
            } else if (result.paymentIntent.status === 'succeeded') {
                alert('Payment successful!');
                // Redirect user or handle success
                window.location.href = '/jobs'; // Modify this URL as needed
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred.');
        }

        setLoading(false);
    };

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
                        onCheckoutClick={handleCheckout} 
                    />
                    <PlanCard 
                        title="Gold Plan" 
                        description="Extended benefits and features" 
                        price="1000" 
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-lg"
                        onCheckoutClick={handleCheckout} 
                    />
                    <PlanCard 
                        title="Platinum Plan" 
                        description="All benefits and features" 
                        price="1500" 
                        className="bg-gradient-to-r from-teal-500 to-teal-700 shadow-lg"
                        onCheckoutClick={handleCheckout} 
                    />
                </div>

                {/* Only render CardElement once */}
                {price && (
                    <div className="mt-8 p-4 bg-gray-200 rounded-md">
                        <h2 className="text-xl mb-4">Complete your payment</h2>
                        <CardElement className="mb-4 p-4 bg-gray-100 rounded-md" />
                        <button
                            className="w-full py-3 px-6 rounded-full bg-blue-600 text-white text-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                            onClick={() => handleCheckout(price)}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Complete Payment'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Plans;

import heroimage from "../../../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function HeroSection() {
  const navigate = useNavigate();
  const learnMoreRef = useRef(null); // Create a ref for the target element

  const scrollToLearnMore = () => {
    if (learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 ">
            Explore Your Next <span className="text-blue-600">Work</span>{" "}
            Opportunity
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover job listings, career paths, and opportunities tailored for
            you. Join us and start exploring your dream job today.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button onClick={() => navigate("/signup")} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button onClick={scrollToLearnMore} className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={heroimage}
            alt="Work Xplore Jobs - Find your dream job"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      {/* Element to scroll to */}
      <div ref={learnMoreRef} >
      </div>
    </section>
  );
}

export default HeroSection;

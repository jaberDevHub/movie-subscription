import React from "react";
import { Link } from "react-router-dom";

const Check = ({ disabled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`size-4 me-2 inline-block ${
      disabled ? "text-base-content/50" : "text-success"
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const SubscriptionCard = ({ service }) => {
  return (
    <div
      data-aos="fade-up" 
      className="relative group perspective h-[450px] w-full max-w-sm rounded-xl overflow-hidden
                 shadow-xl hover:shadow-primary/50 transition-all duration-500 ease-in-out
                 transform hover:-translate-y-4 hover:scale-105
                 bg-base-100 border border-base-content/10 flex flex-col"
    >
      <div
        className="relative w-full h-[60%] flex items-center justify-center p-4 bg-gradient-to-br from-base-200 to-base-300"
      >
        <img
          src={service.thumbnail}
          alt={service.name}
          className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 filter drop-shadow-md"
        />
        <span className="absolute top-4 right-4 badge badge-lg badge-warning px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          {service.category}
        </span>
      </div>

      <div
        className="relative p-6 flex flex-col justify-between flex-grow bg-base-100"
      >
        <h2 className="text-2xl font-extrabold text-base-content mb-2 leading-tight">
          {service.name}
        </h2>

        <p className="text-lg font-bold text-primary mb-4">
          {service.price}/{service.frequency}
        </p>

        <Link to={`/subscriptions/${service.id}`} className="mt-auto">
          <button className="btn btn-primary btn-block text-lg font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 ease-out">
            Explore Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
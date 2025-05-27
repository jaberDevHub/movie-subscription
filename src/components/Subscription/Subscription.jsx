import React from "react";
import subscriptions from "../../../public/data/subscription.json";
import SubscriptionCard from "../Subscription/SubscriptionCard";

const Subscription = () => {
  return (
    <div className="py-16 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-fit mx-auto p-4 md:p-6 bg-base-200 rounded-xl shadow-xl mb-10 border border-base-content/10">
          <h2 className="text-4xl font-extrabold text-indigo-700 drop-shadow-md tracking-tight whitespace-nowrap">
            Subscription Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {subscriptions.map((service) => (
            <SubscriptionCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
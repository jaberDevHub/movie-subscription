// pages/SubscriptionDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import subscriptions from "../../../public/data/subscription.json";

const SubscriptionDetail = () => {
  const { id } = useParams();
  const service = subscriptions.find((item) => item.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const [input, setInput] = useState({ review: "", rating: "" });

  const handleSubmit = () => {
    if (input.review && input.rating >= 1 && input.rating <= 5) {
      setReviews([...reviews, input]);
      setInput({ review: "", rating: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition hover:shadow-2xl">
    <img
      src={service.thumbnail}
      alt={service.name}
      className="w-full h-64 object-cover p-8"
    />

    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
        <p className="text-sm text-gray-600 mt-1">Category: <span className="font-medium">{service.category}</span></p>
        <p className="text-sm text-gray-600">Price: <span className="font-medium">{service.price}</span> / {service.frequency}</p>
      </div>

      {/* Review Inputs */}
      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Write a Review</h3>
        <input
          type="text"
          placeholder="Your review"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3"
          value={input.review}
          onChange={(e) => setInput({ ...input, review: e.target.value })}
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3"
          value={input.rating}
          onChange={(e) => setInput({ ...input, rating: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Submit Review
        </button>
      </div>

      {/* Reviews Section */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-sm text-gray-500">No reviews yet.</p>
        ) : (
          <ul className="space-y-3">
            {reviews.map((rev, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 font-semibold mb-1">⭐ Rating: {rev.rating}/5</p>
                <p className="text-sm text-gray-800">{rev.review}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default SubscriptionDetail;

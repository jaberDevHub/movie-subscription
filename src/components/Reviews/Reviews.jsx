import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartScroll(true), 2000); // delay start
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    { user: 'John', platform: 'Netflix', rating: 5, comment: 'Endless entertainment, perfect for binge-watching!' },
    { user: 'Emma', platform: 'Disney+', rating: 4, comment: 'Great for Marvel, Pixar, and Star Wars fans. Worth it!' },
    { user: 'Ali', platform: 'Hulu', rating: 5, comment: 'Live TV and next-day episodes are a big plus.' },
    { user: 'Sara', platform: 'Prime Video', rating: 4, comment: 'Excellent selection and included with Amazon Prime!' },
    { user: 'Liam', platform: 'HBO Max', rating: 5, comment: 'Top-tier content from HBO and Warner Bros. Love it!' },
    { user: 'Olivia', platform: 'Peacock', rating: 4, comment: 'Solid mix of classics and current shows. Affordable.' },
    { user: 'Noah', platform: 'Netflix', rating: 5, comment: 'The Originals are amazing. Can’t live without it.' },
    { user: 'Ava', platform: 'Disney+', rating: 4, comment: 'Perfect for family viewing and nostalgia.' },
    { user: 'Mason', platform: 'Prime Video', rating: 4, comment: 'Great selection, and I love the offline download feature.' },
    { user: 'Isabella', platform: 'HBO Max', rating: 5, comment: 'Best place to watch blockbuster movies early.' }
  ];

  return (
   <div className="bg-black text-white py-10 px-4 overflow-hidden">
  <h2 className="text-2xl font-bold mb-6 text-center">Streaming Platform Reviews</h2>

  <div className={`flex gap-6 transition-all duration-700 ease-linear ${startScroll ? 'animate-marquee' : ''}`}>
    {reviews.map((review, index) => (
      <div
        key={index}
        className="bg-gray-800 p-4 rounded-xl min-w-[300px] max-w-[300px] shadow-md hover:scale-105 transition-transform duration-300 overflow-hidden break-words"
      >
        <h3 className="text-lg font-semibold mb-1 truncate">{review.platform}</h3>
        <p className="mb-1">⭐ Rating: {review.rating}/5</p>
        <p className="mb-2 italic break-words whitespace-normal">"{review.comment}"</p>
        <p className="text-right text-sm text-gray-300 truncate">- {review.user}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Reviews;

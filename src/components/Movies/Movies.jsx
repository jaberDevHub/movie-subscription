import React from 'react';

const movies = [
  {
    "id": 1,
    "title": "Die Hard",
    "year": "1988",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Die+Hard&font=Inter",
    "tags": ["Action", "Thriller", "Classic", "HD"]
  },
  {
    "id": 2,
    "title": "Terminator 2: Judgment Day",
    "year": "1991",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Terminator+2&font=Inter",
    "tags": ["Action", "Sci-Fi", "Classic", "HD"]
  },
  {
    "id": 3,
    "title": "Mad Max: Fury Road",
    "year": "2015",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Mad+Max:+Fury+Road&font=Inter",
    "tags": ["Action", "Sci-Fi", "Post-Apocalyptic", "HD"]
  },
  {
    "id": 4,
    "title": "The Matrix",
    "year": "1999",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=The+Matrix&font=Inter",
    "tags": ["Action", "Sci-Fi", "Cyberpunk", "HD"]
  },
  {
    "id": 5,
    "title": "Raiders of the Lost Ark",
    "year": "1981",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Raiders+of+the+Lost+Ark&font=Inter",
    "tags": ["Action", "Adventure", "Classic", "HD"]
  },
];

const Movies = () => {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Top 20 Action Movies</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={movie.imageUrl} alt={movie.title} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{movie.title}</h3>
              <p className="text-gray-400 mb-2">{movie.year}</p>
              <div className="flex flex-wrap gap-2">
                {movie.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-indigo-600 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

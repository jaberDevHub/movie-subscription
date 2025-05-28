import React from 'react';

const movies = [
  {
    "id": 1,
    "title": "Die Hard",
    "year": "1988",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Die+Hard&font=Inter",
    "tags": ["Action", "Thriller", "Classic", "HD1"]
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
  {
    "id": 6,
    "title": "Aliens",
    "year": "1986",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Aliens&font=Inter",
    "tags": ["Action", "Sci-Fi", "Horror", "Classic", "HD"]
  },
  {
    "id": 7,
    "title": "The Dark Knight",
    "year": "2008",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=The+Dark+Knight&font=Inter",
    "tags": ["Action", "Crime", "Drama", "Superhero", "HD"]
  },
  {
    "id": 8,
    "title": "Inception",
    "year": "2010",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Inception&font=Inter",
    "tags": ["Action", "Sci-Fi", "Thriller", "HD"]
  },
  {
    "id": 9,
    "title": "Gladiator",
    "year": "2000",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Gladiator&font=Inter",
    "tags": ["Action", "Drama", "Historical", "HD"]
  },
  {
    "id": 10,
    "title": "John Wick",
    "year": "2014",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=John+Wick&font=Inter",
    "tags": ["Action", "Thriller", "Neo-Noir", "HD"]
  },
  {
    "id": 11,
    "title": "Kill Bill: Vol. 1",
    "year": "2003",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Kill+Bill:+Vol.+1&font=Inter",
    "tags": ["Action", "Crime", "Martial Arts", "HD"]
  },
  {
    "id": 12,
    "title": "Crouching Tiger, Hidden Dragon",
    "year": "2000",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Crouching+Tiger,+Hidden+Dragon&font=Inter",
    "tags": ["Action", "Adventure", "Fantasy", "Martial Arts", "HD"]
  },
  {
    "id": 13,
    "title": "Mission: Impossible - Fallout",
    "year": "2018",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Mission:+Impossible+-+Fallout&font=Inter",
    "tags": ["Action", "Adventure", "Thriller", "Spy", "HD"]
  },
  {
    "id": 14,
    "title": "The Bourne Ultimatum",
    "year": "2007",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=The+Bourne+Ultimatum&font=Inter",
    "tags": ["Action", "Mystery", "Thriller", "Spy", "HD"]
  },
  {
    "id": 15,
    "title": "Seven Samurai",
    "year": "1954",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Seven+Samurai&font=Inter",
    "tags": ["Action", "Drama", "Adventure", "Classic", "Foreign", "HD"]
  },
  {
    "id": 16,
    "title": "Predator",
    "year": "1987",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Predator&font=Inter",
    "tags": ["Action", "Sci-Fi", "Horror", "Classic", "HD"]
  },
  {
    "id": 17,
    "title": "Speed",
    "year": "1994",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Speed&font=Inter",
    "tags": ["Action", "Adventure", "Thriller", "HD"]
  },
  {
    "id": 18,
    "title": "The Raid: Redemption",
    "year": "2011",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=The+Raid:+Redemption&font=Inter",
    "tags": ["Action", "Crime", "Thriller", "Martial Arts", "Foreign", "HD"]
  },
  {
    "id": 19,
    "title": "Top Gun: Maverick",
    "year": "2022",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Top+Gun:+Maverick&font=Inter",
    "tags": ["Action", "Drama", "HD", "New"]
  },
  {
    "id": 20,
    "title": "Casino Royale",
    "year": "2006",
    "imageUrl": "https://placehold.co/300x450/1f2937/ffffff?text=Casino+Royale&font=Inter",
    "tags": ["Action", "Adventure", "Thriller", "Spy", "HD"]
  }
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

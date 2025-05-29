import React from 'react';

const featuredMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: "9.3/10",
    poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    serviceIcon: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Netflix_logo.svg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    rating: "9.0/10",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    serviceIcon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Amazon_Prime_Video_logo.svg",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Crime, Drama",
    rating: "8.9/10",
    poster: "https://i.ibb.co/VYspyGcp/MV5-BYzdj-MDAx-ZGIt-Mj-I2-My00-ODA1-LTlk-Nz-It-OWFj-MDU5-ZDJl-YWY3-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg",
    serviceIcon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
  },
  {
    id: 4,
    title: "Inception",
    genre: "Action, Sci-Fi, Thriller",
    rating: "8.8/10",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    serviceIcon: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
  },
];

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-base-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-fit mx-auto p-4 md:p-6 bg-base-200 rounded-xl shadow-xl mb-10  border border-base-content/10">
          <h2 className="text-3xl font-extrabold text-indigo-700 drop-shadow-md tracking-tight whitespace-nowrap">
            Featured Entertainment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {featuredMovies.map((movie) => (
            <div
              key={movie.id}
              data-aos="zoom-in"
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-base-100 border border-base-content/10 group"
            >
              <div className="relative w-full h-110 overflow-hidden">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-base-100 p-2 rounded-full shadow-md">
                  <img src={movie.serviceIcon} alt="Service Logo" className="w-6 h-6 object-contain" />
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between h-auto">
                <h3 className="text-xl font-bold text-base-content mb-2 leading-tight">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{movie.genre}</p>
                <p className="text-sm font-semibold text-primary mb-4">Rating: {movie.rating}</p>

                <div className="flex gap-3 mt-auto">
                  <button className="btn btn-primary btn-sm flex-1">
                    Watch Now
                  </button>
                  <button className="btn btn-outline btn-sm flex-1">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
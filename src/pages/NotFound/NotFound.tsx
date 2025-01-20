import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <h1 className="text-6xl sm:text-8xl font-extrabold text-white drop-shadow-lg">
        404
      </h1>
      <p className="text-xl sm:text-2xl text-white text-center mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-8 bg-white text-gray-900 py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 transform"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

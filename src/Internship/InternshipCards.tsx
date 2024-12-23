import React from "react";

const InternshipCards = ({ img, title }) => {
  return (
    <div className="intern-card bg-gray-100 dark:bg-card-dark dark:border dark:border-white shadow-lg rounded-3xl p-6 flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      {/* Card Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-[200px] object-cover rounded-md mb-4 transition-opacity duration-300 hover:opacity-90"
      />

      {/* Card Title */}
      <p className="text-lg font-semibold text-gray-800 dark:text-card-text-dark bg-white dark:bg-card-title-dark px-4 py-2 rounded-lg shadow-sm text-center transition-colors duration-300">
        {title}
      </p>

      {/* Enroll Now Button */}
      <a
        href="https://forms.gle/z1p7zYR9Juekuy327"
        className="mt-4 px-6 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-[#233142] rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300"
      >
        Enroll Now
      </a>
    </div>
  );
};

export default InternshipCards;

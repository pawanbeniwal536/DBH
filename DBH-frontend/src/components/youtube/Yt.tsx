// import React, { useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./yt.css";
// const YouTubeVideos: React.FC = () => {
//   // Correct embed video URLs
//   const videoUrls = [
//     "https://www.youtube.com/embed/m0BAwlQ189E",
//     "https://www.youtube.com/embed/E5p6oBRmm30",
//     "https://www.youtube.com/embed/1eFWZnMNHkk",
//     "https://www.youtube.com/embed/LAPRwDscmoo",
//   ];

//   // Reference for the scrollable container
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   // Scroll to the next set of videos
//   const handleNext = () => {
//     if (scrollContainerRef.current) {
//       const containerWidth = scrollContainerRef.current.offsetWidth;
//       scrollContainerRef.current.scrollLeft += containerWidth; // Scroll by container width
//     }
//   };

//   // Scroll to the previous set of videos
//   const handlePrev = () => {
//     if (scrollContainerRef.current) {
//       const containerWidth = scrollContainerRef.current.offsetWidth;
//       scrollContainerRef.current.scrollLeft -= containerWidth; // Scroll by container width
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-6 min-h-screen">
//       {/* Heading */}
//       <div
//         className="text-6xl font-bold flex justify-center text-white mb-8"
//         style={{ marginTop: "100px" }}
//       >
//         Our <div className="text-purple-500 pl-4">Work</div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex items-center justify-between w-full max-w-5xl mb-4">
//         <button
//           onClick={handlePrev}
//           style={{ marginLeft: "-100px", marginBottom: "-500px" }}
//           className=" top-1/2  hidden md:block  left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
//         >
//           <FaArrowLeft size={24} />
//         </button>
//         <button
//           onClick={handleNext}
//           style={{ marginRight: "-100px", marginBottom: "-500px" }}
//           className="  top-1/2 hidden md:block left-2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
//         >
//           <FaArrowRight size={24} />
//         </button>
//       </div>

//       {/* Horizontal Scroll Section */}

//       <div
//         ref={scrollContainerRef}
//         className="relative w-full max-w-5xl flex gap-8 overflow-x-auto scrollbar-hide p-4 rounded-lg"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {/* Video Cards */}
//         {videoUrls.map((videoUrl, index) => (
//           <div
//             key={index}
//             className="w-[300px] sm:w-[50%] md:w-[800px] h-[350px] md:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
//           >
//             <iframe
//               className="w-full h-full"
//               src={videoUrl}
//               title={`YouTube Video ${index}`}
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YouTubeVideos;













import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./yt.css";

const YouTubeVideos: React.FC = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/m0BAwlQ189E",
    "https://www.youtube.com/embed/E5p6oBRmm30",
    "https://www.youtube.com/embed/1eFWZnMNHkk",
    "https://www.youtube.com/embed/LAPRwDscmoo",
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollLeft += containerWidth;
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollLeft -= containerWidth;
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      {/* Heading */}
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold flex justify-center text-white mb-6 mt-10">
        Our <div className="text-purple-500 pl-3">Work</div>
      </div>

      {/* Main Video Section with Buttons on Left and Right */}
      <div className="w-full max-w-6xl flex items-center justify-between">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Video Scroll Section */}
        <div
          ref={scrollContainerRef}
          className="w-full max-w-5xl flex gap-4 overflow-x-auto scrollbar-hide p-4 rounded-lg"
          style={{ scrollBehavior: "smooth" }}
        >
          {videoUrls.map((videoUrl, index) => (
            <div
              key={index}
              className="w-[250px] sm:w-[50%] md:w-[700px] h-[200px] sm:h-[300px] md:h-[450px] bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
            >
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={`YouTube Video ${index}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default YouTubeVideos;

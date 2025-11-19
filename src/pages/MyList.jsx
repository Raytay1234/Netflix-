import React, { useState } from "react";

export default function MyList({ darkMode }) {
  const [myList, setMyList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("myList")) || [];
    } catch {
      return [];
    }
  });

  const handleDelete = (id) => {
    const updatedList = myList.filter((movie) => movie.id !== id);
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const bgClass = darkMode ? "bg-gray-900" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-black";
  const secondaryText = darkMode ? "text-gray-400" : "text-gray-700";
  const overlayBg = darkMode ? "bg-black/60" : "bg-black/50";

  return (
    <div className={`${bgClass} ${textClass} min-h-screen pt-20 px-6 md:px-12 transition-colors duration-300`}>
      <h1 className="text-4xl font-bold mb-6">My List</h1>
      {myList.length === 0 ? (
        <p className={`${secondaryText}`}>Your list is empty. Add movies to your list!</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {myList.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 ${overlayBg} flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="mt-2 bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

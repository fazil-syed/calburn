"use client";
// components/SearchBar.tsx
import { useState } from "react";

const SearchBar = ({ handleSubmit }: { handleSubmit: Function }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleClick = () => {
    handleSubmit(query);
    setQuery("");
  };
  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(query);
    setQuery("");
  };
  return (
    <div className=" flex justify-center mt-92">
      <form className="flex w-full" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Ask Questions related to Fitness"
          value={query}
          onChange={handleInputChange}
          className="border-none px-2 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 mr-3 bg-dark-2 w-full text-light-1"
        />
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleClick}
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

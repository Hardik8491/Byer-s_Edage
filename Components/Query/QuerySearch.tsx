import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import CategorySelect from "../Category/Category";
import Coins from "../test/Coin";
import Link from "next/link";

const QuerySearch = ({
  getSearchResults,
  coins,
}: {
  getSearchResults: any;
  coins: any;
}) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const allCategories = ["Category 1", "Category 2", "Category 3"];
  const [showBtn,setShowBtn]=useState(false);
  const BtnHandler=()=>{
    setShowBtn(!showBtn)

  }

  // Use useEffect to trigger search when 'query' changes
  useEffect(() => {
    // Define an asynchronous function to fetch search results
    const fetchSearchResults = async () => {
      const response = await fetch(`/api/coins/search?query=${query}`);
      const coin = await response.json();
      getSearchResults(coin);
    };

    // Trigger the search only if the query is not empty
    if (query.trim() !== "") {
      fetchSearchResults();
    }
  }, [query, getSearchResults]);

  const handleCategorySelect = (category: any) => {
    setSelectedCategory(category);
  };

  

  return (
    <div className="text-black sm:flex lg:mx-4 md:mx-2 md:px-2 md:w-[50%] lg:w-full">
      <div 
      onClick={BtnHandler}
      className="relative hidden text-black sm:flex lg:mx-4 md:mx-2 md:px-2 md:w-[50%] lg:w-full justify-between items-center rounded-md shadow-sm border border-gray-300 py-1">
        {/* Search Input */}
        <input
        
          type="text"
          placeholder="Search for Products"
          name="search"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow bg-transparent lg:p-2 md:p-1 text-sm outline-none"
        />
        {showBtn?<div className="absolute   h-auto py-4 z-10 overflow-hidden right-2 top-11 w-[98%] flex bg-gray-50 items-center justify-center ">
       <Link href={"/Search"} >
       <Coins coins={coins}  />
       </Link>

        </div>:""  }

        {/* Category Select and Search Button */}
        <div className="flex lg:gap-4 md:gap-2 items-center">
          {/* Category Select */}
          <div>
            <CategorySelect
              categories={allCategories}
              onSelect={handleCategorySelect}
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="md:p-1 lg:p-2 rounded-md border-red-500 shadow-sm active:bg-red-800 bg-red-500"
          >
            <FiSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuerySearch;

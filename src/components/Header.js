import React from "react";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
export default function Header({
  searchQuery,
  setSearchQuery,
  setNews,
  setIsLoading
}) {
  function searchNews(e) {
    e.preventDefault();
    let searchUrl = "";
    if (searchQuery) {
      searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${API_KEY}
      `;
    } else {
      return;
    }
    setIsLoading(true);

    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.response.docs);
        setIsLoading(false);
      });
  }

  return (
    <>
      {/* header: title & search bar */}
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-blue-800 font-black font-serif">
          New York Times Search
        </h1>

        <div className="border-2 border-blue-300 rounded p-2 mt-10">
          <form onSubmit={(e) => searchNews(e)}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="outline-none ml-2 text-blue-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 py-1 bg-blue-800 text-white rounded-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";

export default function Results({ news }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-blue-400 font-black font-serif">Results</h2>
      <hr className="border-2 border-blue-100 bg-blue-100" />
      <div className="space-y-2 mt-3">
        {news.map((n) => {
          let published_date = n.pub_date.slice(0, 10);
          return (
            <div className="bg-blue-100 hover:bg-blue-200 w-full px-5 py-3 rounded flex justify-between">
              <a
                href={n.web_url}
                target="_blank"
                className="text-blue-800 text-md hover:underline focus:underline"
              >
                {n.headline.main}
              </a>
              <span className="text-blue-300 text-sm">({published_date})</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

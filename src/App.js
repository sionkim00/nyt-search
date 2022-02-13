import { useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Results from "./components/Results";
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  return (
    <div className="App">
      <div className="px-10 py-5 min-h-screen bg-blue-200">
        <div className="py-10 px-5 bg-white rounded-xl">
          {/* header: title & search bar */}
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setNews={setNews}
            setIsLoading={setIsLoading}
          />
          {/* When is loading */}
          {isLoading && <Loader />}
          {/* Result View */}
          {news.length > 0 && <Results news={news} />}
        </div>
      </div>
    </div>
  );
}

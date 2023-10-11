import Link from "next/link";
import React from "react";

const Navbar2 = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/DisneyHome">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="navmenu">
        <a href="/DisneyHome">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIE</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar2;

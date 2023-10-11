"use client";

import React from "react";
import Link from "next/link";

export interface Movie {
  backgroundImg: string;
  cardImg: string;
  description: string;
  id: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
  ytLink: string;
}

async function getData() {
  try {
    const res = await fetch(
      "https://disney-7a649-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const movies: Movie[] = await res.json();
    return movies;
  } catch (error) {
    console.error("Error fetching data:");
    throw error;
  }
}

export default async function Movies() {
  const movies = await getData();
  //console.log(movies);

  return (
    <div className="MoviesContainer">
      <div>Recommended for you</div>
      <div className="MoviesContent">
        {movies &&
          movies.map((movie) => (
            <div className="MoviesWrap" key={movie.id}>
              <Link href={`/detailpage/${movie.id}`}>
                <img src={movie.cardImg} alt="movies" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

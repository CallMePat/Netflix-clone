import React, { useEffect, useState } from "react";
import { Nav } from "../Nav";
import { Banner } from "../Banner";
import requests from "../../Request";
import { Row } from "../Row";
import CloudflareBanner from "../CloudflareBanner";
import { fetchVideos } from "../../app/cloudflare";

export const HomeScreen = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        const fetchedVideos = await fetchVideos();
        setVideos(fetchedVideos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="">
      <Nav />
      <CloudflareBanner videos={videos} />
      {/* <Banner /> */}

      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

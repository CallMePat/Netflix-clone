import React from 'react';
import { Nav } from '../Nav';
import { Banner } from '../Banner';
import requests from '../../Request';
import { Row } from '../Row';

export const HomeScreen = () => {
  return (
    <div className=''>
      <Nav />

      <Banner />

      <Row title='NETFLIX ORGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

    </div >
  )
}

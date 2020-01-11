import React from "react";

import { Container, Title, MovieList, Movie, MovieTitle } from "./styles";
import IMovie, { ITags } from "../../IMovie";

interface IProps {
  movies: IMovie[];
  selectedCity: string;
}

const Catalog: React.FC<IProps> = ({ movies, selectedCity }) => {
  return (
    <Container>
      <Title>
        <span>EM CARTAZ</span>
        <small>Exibindo resultados para: {selectedCity}</small>
      </Title>
      <hr />
      <MovieList>
        {movies.map((item: any) => {
          const movie: IMovie = item.event;

          return (
            <a
              target="_blank"
              href={
                movie.trailers.length > 0
                  ? movie.trailers[0].url
                  : movie.siteURL
              }
              key={movie.id}
            >
              <Movie>
                <div>
                  <img src={movie.images[0].url}></img>
                  <div>
                    {movie.completeTags.map((tag: ITags) => (
                      <span key={tag.name}>{tag.name}</span>
                    ))}
                  </div>
                </div>
                <MovieTitle>
                  <span>{movie.title}</span>
                </MovieTitle>
              </Movie>
            </a>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Catalog;

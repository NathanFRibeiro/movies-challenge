interface ITrailer {
  type: string;
  url: string;
  embeddedUrl: string;
}

interface IThumb {
  url: string;
  type: string;
}

export interface ITags {
  name: string;
}

export interface IResponse {
  event: IMovie;
}

export default interface IMovie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  images: IThumb[];
  genres: string[];
  trailers: ITrailer[];
  completeTags: ITags[];
}

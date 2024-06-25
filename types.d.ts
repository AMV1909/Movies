export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: "movie";
    Poster: string;
}

export interface ISearchData {
    Search?: IMovie[];
    totalResults?: number;
    Response: boolean;

    Error?: string;
}

export const RawMovieResponse = {
  page: Number,
  results: [
    {
      id: Number,
      title: String,
      poster_path: String,
      overview: String,
      vote_average: Number,
    },
  ],
  total_pages: Number,
  total_results: Number,
}
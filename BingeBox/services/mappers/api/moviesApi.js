import { mapRowMoviesToModel } from "../mapRawMoviesToModel";
import {BASE_TMDB_URL} from '@env'

export const fetchMovies = async () => {
  console.log("BASE_TMDB_URL:", BASE_TMDB_URL)
  const res = await fetch(`${BASE_TMDB_URL}`)
  const data = await res.json()
  return mapRowMoviesToModel(data.results)
}

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'

export const axiosConfig = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}` }
}

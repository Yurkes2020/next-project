import axios from 'axios';

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const headers = {
	accept: 'application/json',
	Authorization: `Bearer ${API_TOKEN}`,
};

export const moviesApi = {
	async fetchMovies(page = 1) {
		try {
			const response = await axios.get(
				`${API_URL}/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`,
				{ headers }
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching movies:', error);
			throw error;
		}
	},

	async fetchMovieById(id: number) {
		try {
			const response = await axios.get(`${API_URL}/movie/${id}`, { headers });
			return response.data;
		} catch (error) {
			console.error('Error fetching movie by ID:', error);
			throw error;
		}
	},

	async fetchGenres() {
		try {
			const response = await axios.get(`${API_URL}/genre/movie/list?language=en`, { headers });
			return response.data.genres;
		} catch (error) {
			console.error('Error fetching genres:', error);
			throw error;
		}
	},

	async fetchMoviesByGenre(genreId: number, page = 1) {
		try {
			const response = await axios.get(
				`${API_URL}/discover/movie?with_genres=${genreId}&language=en-US&page=${page}`,
				{ headers }
			);
			return response.data;
		} catch (error) {
			console.error('Error fetching movies by genre:', error);
			throw error;
		}
	},

	async searchMovies(query: string, page = 1) {
		try {
			const response = await axios.get(
				`${API_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=${page}&include_adult=false`,
				{ headers }
			);
			return response.data;
		} catch (error) {
			console.error('Error searching movies:', error);
			throw error;
		}
	},
};

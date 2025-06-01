
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {MovieByIdType} from "@/types/movieByIdType";
import {Genre} from "@/types/genreType";
import {moviesApi} from "@/api/moviesApi";
import {MovieType} from "@/types/movieType";


type moviesSliceType = {
	movies: MovieType[];
	movie: MovieByIdType | null;
	genres: Genre[];
	movieGenres: MovieType[];
	searchResults: MovieType[];
	isLoading: boolean;
	currentPage: number;
	totalPages: number;
};

const initialState: moviesSliceType = {
	movies: [],
	movie: null,
	genres: [],
	movieGenres: [],
	searchResults: [],
	isLoading: false,
	currentPage: 1,
	totalPages: 1,
};


const getMovies = createAsyncThunk(
	'moviesSlice/getMovies',
	async (page: number = 1, thunkApi) => {
		try {
			const data = await moviesApi.fetchMovies(page);
			return thunkApi.fulfillWithValue({
				movies: data.results,
				totalPages: data.total_pages
			});
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);

const getMovieById = createAsyncThunk(
	'movieSlice/getMovieById',
	async (id: number, thunkApi) => {
		try {
			const data = await moviesApi.fetchMovieById(id);
			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);

const getGenres = createAsyncThunk(
	'moviesSlice/getGenres',
	async (_, thunkApi) => {
		try {
			const data = await moviesApi.fetchGenres();
			return thunkApi.fulfillWithValue(data);
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);


const getMoviesByGenre = createAsyncThunk(
	"moviesSlice/getMoviesByGenre",
	async ({ genreId, page }: { genreId: number; page: number }, thunkApi) => {
		try {
			const data = await moviesApi.fetchMoviesByGenre(genreId, page);
			return thunkApi.fulfillWithValue({
				movies: data.results,
				totalPages: data.total_pages
			});
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);


const searchMovies = createAsyncThunk(
	'moviesSlice/searchMovies',
	async ({ query, page }: { query: string; page: number }, thunkApi) => {
		try {
			const data = await moviesApi.searchMovies(query, page); // Викликаємо функцію API для пошуку з передачею сторінки
			return thunkApi.fulfillWithValue({
				results: data.results,
				totalPages: data.total_pages,
			});
		} catch (err) {
			return thunkApi.rejectWithValue(err);
		}
	}
);

export const moviesSlice = createSlice({
	name: 'moviesSlice',
	initialState: initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getMovies.fulfilled, (state, action: PayloadAction<{ movies: MovieType[]; totalPages: number }>) => {
				state.movies = action.payload.movies;
				state.totalPages = action.payload.totalPages;
			})
			.addCase(getMovieById.pending, (state) => {
				state.isLoading = true;
				state.movie = null;
			})
			.addCase(getMovieById.fulfilled, (state, action: PayloadAction<MovieByIdType>) => {
				state.movie = action.payload;
				state.isLoading = false;
			})
			.addCase(getGenres.fulfilled, (state, action: PayloadAction<Genre[]>) => {
				state.genres = action.payload;
			})
			.addCase(getMoviesByGenre.fulfilled, (state, action: PayloadAction<{ movies: MovieType[], totalPages: number }>) => {
				state.movies = action.payload.movies;
				state.totalPages = action.payload.totalPages;
			})
			.addCase(searchMovies.fulfilled, (state, action: PayloadAction<{ results: MovieType[]; totalPages: number }>) => {
				state.searchResults = action.payload.results;
				state.totalPages = action.payload.totalPages;
			});
	}
});

export const moviesSliceActions = {
	...moviesSlice.actions,
	getMovies,
	getMovieById,
	getGenres,
	getMoviesByGenre,
	searchMovies
};

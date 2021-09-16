import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// NOTE Promises with 'async/await'
	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://swapi.dev/api/films/');

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const data = await response.json();

			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	let content = <p>'No movies found'</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;

// NOTE Initial content replaced with 'content' variable
// {!isLoading && movies.length > 0 && (
// 	<MoviesList movies={movies} />
// )}
// {!isLoading && movies.length === 0 && !error && (
// 	<p>No movies found</p>
// )}
// {isLoading && <p>Loading...</p>}
// {!isLoading && error && <p>{error}</p>}

// NOTE Default movie data
// const dummyMovies = [
//   {
//     id: 1,
//     title: 'Some Dummy Movie',
//     openingText: 'This is the opening text of the movie',
//     releaseDate: '2021-05-18',
//   },
//   {
//     id: 2,
//     title: 'Some Dummy Movie 2',
//     openingText: 'This is the second opening text of the movie',
//     releaseDate: '2021-05-19',
//   },
// ];

// NOTE Promises with 'then'
// function App() {
// 	const [movies, setMovies] = useState([]);

// 	function fetchMoviesHandler() {
// 		fetch('https://swapi.dev/api/films/')
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((data) => {
// 				const transformedMovies = data.results.map((movieData) => {
// 					return {
// 						id: movieData.episode_id,
// 						title: movieData.title,
// 						openingText: movieData.opening_crawl,
// 						releaseDate: movieData.release_date,
// 					};
// 				});
// 				setMovies(transformedMovies);
// 			});
// 	}

// 	return (
// 		<React.Fragment>
// 			<section>
// 				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
// 			</section>
// 			<section>
// 				<MoviesList movies={movies} />
// 			</section>
// 		</React.Fragment>
// 	);
// }

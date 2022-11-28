import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));


export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Movies query={null} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

      // {/* <Route index element={<HomePage />} />
      //   <Route path="/movies" element={<MoviePage />} />
      //   <Route path="/movies/:movieId" element={<MovieDetails />}>
      //     <Route path="cast" element={<Cast />} />
      //     <Route path="reviews" element={<Reviews />} />
      //   </Route>
      //   <Route path="*" element={<Movies query={null} />} /> */}
// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
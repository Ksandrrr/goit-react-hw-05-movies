// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { MovieDetails } from './MovieDetails/MovieDetails';
// import { HomePage } from './HomePage/HomePage';
// import { MoviesPage } from './MoviesPage/MoviesPage';
// import { NavbarMenu } from './NavbarMenu/NavbarMenu';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// export const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <NavbarMenu />
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>
//           <Route path="/movies" element={<MoviesPage />}></Route>
//           <Route path="/movies/:movieId" element={<MovieDetails />}>
//             <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>
//             <Route path="/movies/:movieId/reviews" element={<Reviews/>}></Route>
//           </Route>
//           <Route path="*" element={<HomePage />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import  NavbarMenu  from './NavbarMenu/NavbarMenu';

import  HomePage  from './HomePage/HomePage';
const MoviesPage = lazy(() => import("./MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarMenu />
        <Suspense fallback={<div>Loading...</div>}>
           <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast/>}></Route>
            <Route path="/movies/:movieId/reviews" element={<Reviews/>}></Route>
         </Route>
         <Route path="*" element={<HomePage />}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
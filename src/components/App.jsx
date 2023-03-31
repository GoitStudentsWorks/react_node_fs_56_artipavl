import { Route, Routes } from 'react-router-dom';
import { StartScreen } from 'pages';
import RegisterPage from 'pages/RegisterPage';
import SignInPage from 'pages/SignInPage';

import Favorite from '../pages/Favorite/Favorite';
import MyRecipes from '../pages/MyRecipes/MyRecipes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route
        path="/register"
        element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute restricted>
            <SignInPage />
          </PublicRoute>
        }
      />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/my" element={<MyRecipes />} />
    </Routes>
  );
};

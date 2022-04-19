import React, { useContext } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { createGlobalStyle } from 'styled-components';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './assets/context/auth.context';
import { RequireAuth } from './assets/hoc/RequireAuth';
import MainPage from './components/MainPage';
import Movie from './components/MainPage/Movie';
import Comments from './components/MainPage/Comments';

i18n
  .use(initReactI18next)
  .init({
    resources: {

    },
    lng: "en",
    "fallbackLng": "en",
    interpolation: {
      escapeValue: false
    }
  });

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-color: #d7d7d7;

    min-width: 100vmin;
    min-height: 100vh;
  }
`;

function App() {
  const { t } = useTranslation();

  const { login, logout, token, isAuthenticated } = useAuth()

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          } />
          <Route path="/movie" element={<Movie />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

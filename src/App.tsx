import React from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { createGlobalStyle } from 'styled-components';

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
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

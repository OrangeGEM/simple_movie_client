import React from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';


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

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

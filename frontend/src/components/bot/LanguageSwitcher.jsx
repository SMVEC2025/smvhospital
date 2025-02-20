import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '../../styles/BotWrapper.css';
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // Handle RTL for Urdu
    document.documentElement.dir = i18n.language === "ur" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ta")}>Tamil</button>
      <button onClick={() => changeLanguage("ur")}>Urdu</button>
      <button onClick={() => changeLanguage("zh")}>Chinese</button>
    </div>
  );
};

export default LanguageSwitcher;

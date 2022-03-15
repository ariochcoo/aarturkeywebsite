import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const { Provider } = LanguageContext;

export const LanguageProvider = (props) => {
  const [siteLanguage, setSiteLanguage] = useState("Arabic");
  //const [languageSet, setLanguageSet] = useState(true);

  useEffect(() => {
    handlerRTLwebsite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteLanguage]);

  function handlerRTLwebsite() {
    if (siteLanguage === "Arabic") {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }
  }

  return (
    <Provider value={[siteLanguage, setSiteLanguage]}>
      {props.children}
    </Provider>
  );
};

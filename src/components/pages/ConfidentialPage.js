import React, { useContext } from "react";
import ConfiTurkish from "./ConfiTurkish";
import ConfiArabic from "./ConfiArabic";

import { LanguageContext } from "../../context/LanguageContext";

const ConfidentialPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);

  return (
    <div>{siteLanguage === "Arabic" ? <ConfiArabic /> : <ConfiTurkish />}</div>
  );
};

export default ConfidentialPage;

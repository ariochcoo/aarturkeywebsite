import React, { useContext } from "react";
import EmerArabic from "./EmerArabic";
import EmerTurkish from "./EmerTurkish";

import { LanguageContext } from "../../context/LanguageContext";
const EmergencyPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);

  return (
    <div>{siteLanguage === "Arabic" ? <EmerArabic /> : <EmerTurkish />}</div>
  );
};

export default EmergencyPage;

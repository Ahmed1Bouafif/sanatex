import { graphql, useStaticQuery } from 'gatsby';
import { capitalize, toUpper } from 'lodash';
import React, { useState } from 'react';

const langQuery = graphql`
  query LangQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
export const LangSelect = () => {
  const { languages } = useStaticQuery(langQuery).site.siteMetadata;

  const [language, setLanguage] = useState(languages.defaultLangKey);
  // const { languages, changeLanguage } = useI18next();
  // const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    // i18next.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <select
      value={language}
      onChange={(e) => handleChangeLanguage(e.target.value)}
      id="underline_select"
      className="block py-2.5 px-1 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
    >
      {languages.langs.map((lang) => (
        <option key={lang} value={lang}>
          {toUpper(lang)}
        </option>
      ))}
    </select>
  );
};

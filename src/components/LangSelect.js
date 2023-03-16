import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import i18next from 'i18next';
import { capitalize, toUpper } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { defaultLangKey, langs } =
    useStaticQuery(langQuery).site.siteMetadata.languages;

  const [lang, setLang] = useState(defaultLangKey);
  // const { language, changeLanguage } = useI18next();
  // const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    // this changes url : /de/contact
    // changeLanguage(lang);
    setLang(lang);
  };

  return (
    <>
      <label
        htmlFor="underline_select"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <select
        value={lang}
        onChange={(e) => handleChangeLanguage(e.target.value)}
        id="underline_select"
        className=" border border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {langs.map((lang) => (
          <option key={lang} value={lang}>
            {toUpper(lang)}
          </option>
        ))}
      </select>
    </>
  );
};

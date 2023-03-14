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
  const { changeLanguage } = useI18next();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    // this changes url : /de/contact
    // changeLanguage(lang);
    setLang(lang);
  };

  return (
    <select
      value={lang}
      onChange={(e) => handleChangeLanguage(e.target.value)}
      id="underline_select"
      className="block py-2.5 px-1 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
    >
      {langs.map((lang) => (
        <option value={lang}>{toUpper(lang)}</option>
      ))}
    </select>
  );
};

import { Link } from 'gatsby';
import { capitalize } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormTabContext } from '../context/store';
export const NavLink = ({ label, slug }) => {
  const { t } = useTranslation();
  const { activeFormTab, setActiveFormTab } = useFormTabContext();
  return (
    <Link
      onClick={(e) => {
        if (label === 'open positions') {
          setActiveFormTab(1);
        } else {
          setActiveFormTab(0);
        }
      }}
      to={slug}
      className="inline-block rounded-lg whitespace-nowrap py-1 px-2 text-sm  hover:bg-black-800  text-white"
    >
      {capitalize(t(label))}
    </Link>
  );
};

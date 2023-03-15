import { Link } from 'gatsby';
import { capitalize } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
export const NavLink = ({ label, slug }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={slug}
      className="inline-block rounded-lg whitespace-nowrap py-1 px-2 text-sm  hover:bg-black-800  text-white"
    >
      {capitalize(t(label))}
    </Link>
  );
};

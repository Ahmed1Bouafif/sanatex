import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { navLinks } from '../data/nav-links';
import { motion } from 'framer-motion';
import { capitalize } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useNavContext } from '../context/store';
const menuQuery = graphql`
  query MenuQuery {
    site {
      siteMetadata {
        menu {
          label
          slug
        }
      }
    }
  }
`;
export const NavListMobile = () => {
  const { menu } = useStaticQuery(menuQuery).site.siteMetadata;
  const { setExpandNav } = useNavContext();
  const { t } = useTranslation();
  return (
    <motion.div
      className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 opacity-100 scale-100 md:hidden"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {menu.map(({ label, slug }) => (
        <Link
          onClick={(e) => setExpandNav(false)}
          key={label}
          to={slug}
          className="block w-full p-2"
        >
          {capitalize(t(label))}
        </Link>
      ))}
    </motion.div>
  );
};

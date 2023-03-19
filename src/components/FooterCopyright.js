import { Link } from 'gatsby';
import React from 'react';
import { footerCopyrightLinks } from '../data/footer-copyright-links';
import Container from './Container';

export const FooterCopyright = () => {
  return (
    <div className="bg-black py-4">
      <Container>
        <div className="flex  flex-col sm:flex-row sm:justify-between justify-center items-center text-sm gap-5">
          <div className="flex items-center justify-between gap-3 ">
            {footerCopyrightLinks.map(({ name, pathname }) => (
              <Link
                key={name}
                to={pathname}
                className="bg-green-40s0 text-white  hover:opacity-100"
              >
                {name}
              </Link>
            ))}
          </div>
          <p className=" text-white ">© 2023 Sanatex Communication</p>
          <p className=" text-white ">
            Powered by{' '}
            <Link to="#" className="font-bold">
              TROKKIITT
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

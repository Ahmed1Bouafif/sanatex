import React from 'react';
import Container from './Container';
import { TrustedByItem } from './TrustedByItem';

export const TrustedBy = () => {
  return (
    <Container className={'pb-16 text-center '}>
      <div className="mst-36 lg:mt-20">
        <h3 className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </h3>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <TrustedByItem />
              <TrustedByItem />
              <TrustedByItem />
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <TrustedByItem />
              <TrustedByItem />
              <TrustedByItem />
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
};

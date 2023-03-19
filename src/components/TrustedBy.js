import React from "react"
import Container from "./Container"
import { TrustedByItem } from "./TrustedByItem"

export const TrustedBy = () => {
  return (
    <Container className={"pb-16 text-center "}>
      <div className="mst-36 lg:my-14">
        <h3 className="font-display text-base text-slate-900">Diese (?) Unternehmen haben uns bisher vertraut</h3>
        <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          {/* <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <TrustedByItem logo={"https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg"} />
              <TrustedByItem logo={"https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg"} />
              <TrustedByItem logo={"https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg"} />
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <TrustedByItem logo={"https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg"} />
              <TrustedByItem logo={"https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg"} />
               <TrustedByItem
                logo={
                  'https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg'
                }
              /> 
            </ul>
          </li> */}
        </ul>
      </div>
    </Container>
  )
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
function SplideImages() {
    const splideOptions = {
        perPage: 3,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };
  return (
    <div>
      <h1 className="text-xl mt-4 mb-5">Trending</h1>
      <div>
        <Splide aria-label="My Favorite Images" options={splideOptions} >
          <SplideSlide>
           <Link href='/trending/nike1'>
           <img src="/images/nike1.webp" alt="Image 1" />
           <h3>Air jordan 1 Low SE Craft</h3>
           </Link>
          </SplideSlide>
          <SplideSlide>
            <Link href='/trending/nike2'>
            <img src="/images/nike2.webp" alt="Image 2" />
            <h3> Air jordan 2 Low SE Craft</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/trending/nike3'>
            <img src="/images/nike3.webp" alt="Image 3" />
            <h3> Air jordan 3 Low SE Craft</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/trending/nike4'>
            <img src="/images/nike4.webp" alt="Image 4" />
            <h3> Air jordan 4 Low SE Craft</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/trending/nike5'>
            <img src="/images/nike5.webp" alt="Image 5" />
            <h3> Air jordan 5 Low SE Craft</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/trending/nike6'>
            <img src="/images/nike6.webp" alt="Image 6" />
            <h3> Air jordan 6 Low SE Craft</h3>
            </Link>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default SplideImages;

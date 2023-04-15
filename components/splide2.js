/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
function SplideImages2() {
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
      <h1 className="text-xl mt-4 mb-5">Popular Right Now</h1>
      <div>
        <Splide aria-label="My Favorite Images" options={splideOptions} >
          <SplideSlide>
           <Link href='/popular/popular1'>
           <img src="/popular/p1.webp" alt="Image 1" />
           <h3>Air jordan 1 Low</h3>
           <h3>men shoes</h3>
           </Link>
          </SplideSlide>
          <SplideSlide>
            <Link href='/popular/popular2'>
            <img src="/popular/p2.webp" alt="Image 2" />
            <h3> Air jordan 2 Low SE Craft</h3>
            <h3>big kids shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular3'>
            <img src="/popular/p3.webp" alt="Image 3" />
            <h3> Jumpman Two Trey</h3>
            <h3>men shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular4'>
            <img src="/popular/p4.webp" alt="Image 4" />
            <h3> Air jordan 1 Mid</h3>
            <h3>men shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular5'>
            <img src="/popular/p5.webp" alt="Image 5" />
            <h3> Air jordan 1 Low</h3>
            <h3>men shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular6'>
            <img src="/popular/p6.webp" alt="Image 6" />
            <h3> Air jordan 1 Low</h3>
            <h3>Big kids shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular7'>
            <img src="/popular/p7.webp" alt="Image 7" />
            <h3> Air jordan 1 Low</h3>
            <h3>women shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular8'>
            <img src="/popular/p8.webp" alt="Image 8" />
            <h3> Air jordan 1 Mid</h3>
            <h3>men shoes</h3>
            </Link>
          </SplideSlide>
          <SplideSlide>
          <Link href='/popular/popular9'>
            <img src="/popular/p9.webp" alt="Image 9" />
            <h3> Air jordan 1 Low</h3>
            <h3>men shoes</h3>
            </Link>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default SplideImages2;

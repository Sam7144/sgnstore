/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Iconic from "./Iconic";
import SplideImages from "./splide";
import SplideImages2 from "./splide2";

function Hero() {
  return (
    <div className="hero wrapper mtop p-2">
      <div className='hero__div2'></div>
      <div className="a scroll">
        <Link href="/offer">
          <div className="hero__image1 relative"></div>
          <div className="hero__des text-white pl-4">
            <h1 className="text-6xl font-extrabold hc">SAVE UPTO 50%</h1>
            <p className="pt-8 text-base font-bold pc">
              save big on limited-time markdowns-no code required.Exclusions
              apply
            </p>
            <button className="mt-5 button-theme hover:bg-gray-600">
              shop
            </button>
          </div>
        </Link>
      </div>
      <div>
        <Iconic/>
      </div>
      <div className='morgan my-5'>
            <Link href='/morgan'>
            <h1 className="text-xl mt-4 mb-5">New Arrival</h1>
              <div className='morgan__image'></div>
              <div className="w-full mb-5">
            <h1 className="w5 mx-auto text-4xl text-center font-extrabold">
              LEGACY FOREVER
            </h1>
            <p className="text-center w-1/2 mx-auto my-3">
             The moment we have been waiting for is finally here.Rep the reigning world champs in the
             2023 United States National Team soccer kits as they continue to build upon their incredible legacy.
             Hurry...
            </p>
            <div className="btn text-center">
              <button className="mx-auto text-center button-theme btn-b py-5 text-xl mb-5 hover:bg-gray-600">
                shop
              </button>
            </div>
          </div>
            </Link>
          </div>
      <div className="air scroll">
        <h1 className="text-xl mt-4 mb-5">Air Max</h1>
        <Link href="/air">
          <div className="air__image"></div>
          <div className="w-full mb-5">
            <h1 className="w5 mx-auto text-4xl text-center font-extrabold">
              MAKE WAVES IN THE AIR
            </h1>
            <p className="text-center w-1/2 mx-auto my-3">
              Amp your self-expression with the high-energy colors of the Air
              Max ,Futura VaporMax Plus and more
            </p>
            <div className="btn text-center">
              <button className="mx-auto text-center button-theme btn-b py-5 text-xl mb-5 hover:bg-gray-600">
                shop
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="nike-style scroll">
        <Link href="/judge">
          <h1 className="text-xl mt-4 mb-5">Nike Style</h1>
          <div className="nike__image"></div>
          <div className="w-full mb-5">
            <h1 className="w5 mx-auto text-4xl text-center font-extrabold">
              NIKE STYLE
            </h1>
            <p className="text-center w-2/5 mx-auto my-3">
              Model Reign judge dresses are true to herself by bringing a
              timeless flair to all of her fits
            </p>
            <div className="btn text-center">
              <button className="mx-auto text-center button-theme btn-b py-5 text-xl mb-5 hover:bg-gray-600">
                shop
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="shop scroll">
        <h1 className="text-xl mt-4 mb-5">lets Go</h1>
        <div className="shop__tags">
         <Link href="/tour">

          <div className="shop__tags1">
            <div className="air-g1">
              <h2>AIR MAX 90 G</h2>
              <h1 className="text-2xl">Gear for Any Round</h1>
              <button className="button-theme mt-3  hover:bg-gray-600">
                shop
              </button>
            </div>
          </div>
         </Link>
         <Link href='/basket'>

          <div className="shop__tags2">
            <div className="air-g">
              <h2>Tourney Fan Gear</h2>
              <h1 className="text-2xl">Rep Your Team</h1>
              <button className="button-theme mt-3  hover:bg-gray-600">
                shop
              </button>
            </div>
          </div>
         </Link>
        </div>
      </div>
      <SplideImages/>
     
      <div className="run">
        <h1 className="text-xl mt-4 mb-5">Nike Runnnings Favs</h1>
        <div className="run__images">
          <Link href="/running/run1">
            <div className="run1"></div>
            <h2 className="my-5 ml-5 text-xl ">Pegasus 39</h2>
          </Link>
          <Link href="/running/run2">
            <div className="run2"></div>
            <h2 className="my-5 ml-5 text-xl ">1nvicibl 3</h2>
          </Link>
          <Link href="/running/run3">
            <div className="run3"></div>
            <h2 className="my-5 ml-5 text-xl ">Infinity 3 </h2>
          </Link>
        </div>
      </div>
      <div className="workout mt-5 mb-5">
        <h1 className="my-5 ml-5 text-xl ">For Your Workout</h1>
        <Link href="/workout">
          <div className="workout__image"></div>
        </Link>
      </div>
      <SplideImages2/>
      <div className='mtop'></div>
    </div>
  );
}

export default Hero;
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Iconic() {
  return (
    <div className="my-8">
      <h1 className="text-xl mt-4 mb-5">Always Iconic</h1>
      <div className="md:flex justify-between gap-5">
        <div className="wrapp">
          <a href="/iconic/jordan" className="wr">
            <Image
              src="/iconic/jordan1.webp"
              className="imgwr object-fill"
              alt="j"
              width={400}
              height="400"
            ></Image>
            <h3 className="py-2 pl-3">Jordan</h3>
          </a>
          <a href="/iconic/classicNikes" className="wr">
            <Image
              src="/iconic/classic1.webp"
              className="imgwr object-fill"
              alt="c1"
              width={400}
              height="400"
            ></Image>
            <h3 className="py-2 pl-3">Classic Nikes</h3>
          </a>
          <a href="/iconic/AirMax" className="wr">
            <Image
              src="/iconic/classic2.webp"
              className="imgwr object-fill"
              alt="c2"
              width={400}
              height="400"
            ></Image>
            <h3 className="py-2 pl-3">Air Max</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Iconic;

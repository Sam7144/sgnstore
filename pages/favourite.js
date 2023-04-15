/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Favour } from "@/utils/Favourite";
import CartEmpty from "./cart/cartEmpty";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
function Fav() {
  const router = useRouter();
  const { stateF, dispatchF } = useContext(Favour);
  console.log(stateF)
  const removeFavItem = (item) => {
    dispatchF({ type: "REMOVE_FAV_ITEM", payload: item });
  };
  console.log('state')
  console.log(stateF.fav.favItems)
  return (
    <div className="wrapper mtop">
      <div className={`w-full h-screen`}>
        <div className={` w-full h-screen `}>
          {stateF.fav.favItems.length === 0 ? (
            <div>
              <h2>favourite list is empty go back to shooping</h2>
              <Link href='/'>go back to homepage</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-4 md:gap-5">
              <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full ">
                  <thead className="border-b">
                    <tr>
                      <th className="p-5 text-left">Item</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stateF.fav.favItems.map((item) => (
                      <tr key={item.name} className="border-b">
                        <td>
                          <Link href={`/morgan/${item.name}`} legacyBehavior>
                            <a className="flex items-center">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                              ></Image>
                              &nbsp;
                              {item.name}
                            </a>
                          </Link>
                        </td>
                        <td className="p-5 text-right">${item.price}</td>
                        <td className="p-5 text-center">
                          <button onClick={() => removeFavItem(item)}>
                            <XCircleIcon className="h-5 w-5"></XCircleIcon>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Fav), { ssr: false });

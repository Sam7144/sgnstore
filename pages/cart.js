/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Store } from "@/utils/Store";
import CartEmpty from "./cart/cartEmpty";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
function Cart() {
  console.log('good')
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const removeCartIem=(item)=>{
    dispatch({type:"REMOVE_CART_ITEM",payload:item})
  }
  const updateCart=(item,qty)=>{
    const quantity=Number(qty);
    dispatch({type:'ADD_TO_CART',payload:{...item,quantity}})
  }
  return (
    <div className="wrapper mtop">
      <div className={`w-full h-screen`}>
        <div className={` w-full h-screen `}>
          {state.cart.cartItems.length === 0 ? (
            <div>
              <h2>cart is empty go back to shooping</h2>
              <CartEmpty />
            </div>
          ) : (
            <div className="grid md:grid-cols-4 md:gap-5">
              <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full ">
                  <thead className="border-b">
                    <tr>
                      <th className="p-5 text-left">Item</th>
                      <th className="p-5 text-right">Quantity</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.cart.cartItems.map((item) => (
                      <tr key={item.slug} className="border-b">
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
                        <td className="p-5 text-right">
                          <select value={item.quantity}
                          onChange={(e)=>updateCart(item,e.target.value)}
                          >
                            {[...Array(item.stock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-5 text-right">${item.price}</td>
                        <td className="p-5 text-center">
                          <button onClick={()=>removeCartIem(item)}>
                            <XCircleIcon className="h-5 w-5"></XCircleIcon>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {state.cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className="primary-button w-full"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default dynamic(()=>Promise.resolve(Cart),{ssr:false});

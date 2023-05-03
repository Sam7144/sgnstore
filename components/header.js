/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { Store } from "@/utils/Store";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropDownLink from "./DropDownLink";
import Cookies from "js-cookie";
import { Favour } from "@/utils/Favourite";
function Header() {
  const { state, dispatch } = useContext(Store);
  const { stateF, dispatchF } = useContext(Favour);
  const { status, data: session } = useSession();
  const [count, setCount] = useState(0);
  const { cart } = state;
  const router = useRouter();
  const goTocart = () => {
    router.push("/cart");
  };
  const goToFav = () => {
    router.push("/favourite");
  };
  useEffect(() => {
    setCount(cart.cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cart.cartItems]);
  const logoutHandler = () => {
    Cookies.remove("cart");
    Cookies.remove("fav");
    dispatch({ type: "FAV_RESET" });
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };
  const [query, setQuery] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/${query}`);
  };
  return (
    <header className="opacity-100 z-50 bg-white ">
      <nav className="flex items-center justify-between nike-containe head wrapper">
        <div className="flex items-center">
          <Link href='/'>
          <img src="/nike/nikelogo.png" alt="logo" className="w-16 h-auto" />
          </Link>
        </div>
       
        <ul className="flex items-center justify-center gap-2">
          <li className='grid items-center'>
          <form
              onSubmit={submitHandler}
              className=" hidden w-full
              mx-auto  flex justify-center md:flex"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0"
                placeholder="Search by category"
              />
              <button
                className="rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                search
              </button>
            </form>
          </li>
          <li className="grid items-center" onClick={goToFav}>
            <HeartIcon className="icon-style b" />
          </li>
          <li className="grid items-center" onClick={goTocart}>
            <button
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative flex"
            >
              <ShoppingBagIcon className="icon-style b" />
              {count > 0 && <span>{count}</span>}
            </button>
          </li>
          <li className="grid items-center">
            {status === "loading" ? (
              "loading"
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block">
                <Menu.Button className="text-blue-600">
                  {session.user.name}
                </Menu.Button>
                <Menu.Items className="absolute w-56 right-0 bg-white origin-top-right shadow-lg">
                  <Menu.Item>
                   
                      <a
                        href="#"
                        className="dropdown-link"
                        onClick={logoutHandler}
                      >
                        logout
                      </a>
                    
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link href="/login">login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

/* eslint-disable react-hooks/rules-of-hooks */
import { Store } from "@/utils/Store";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Favour } from "@/utils/Favourite";
function singleProduct({ data }) {
  const{state,dispatch}=useContext(Store);
   const{stateF,dispatchF}=useContext(Favour);
  const router=useRouter();
  const product=data;
  const addToCart=()=>{
    const existitem=state.cart.cartItems.find((x)=>x.name===product.name);
    const quantity=existitem?existitem.quantity+1:1;
    dispatch({type:"ADD_TO_CART",payload:{...product,quantity}})
    router.push('/cart');
  }
  const addToFav=()=>{
    dispatchF({type:"ADD_TO_FAV",payload:{...product}})
  }
  return (
    <div className="mtop grid md:grid-cols-2 wrapper">
      <Image src={data.image} alt={data.slug} width={500} height={500} className="imgim"></Image>
      <div className="p-5">
        <h1 className="my-3">name:{data.name}</h1>
        <h2 className="my-5">price:${data.price}</h2>
        <p className="my-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscisfa. Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscisfa. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscisfa.
        </p>
        <p className="my-5">Reviews:0</p>
        <div className="my-5 " onClick={addToCart}>
          <button className="g-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">ADD TO CART</button>
        </div>
        <div className="my-5" onClick={addToFav}>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4  hover:border-blue-500 rounded">ADD TO FAVOURITE</button>
        </div>
      </div>
    </div>
  );
}

export default singleProduct;
export async function getStaticPaths() {
  const { yoga } = await import("../../pages/data/data.json");
  const allpaths = yoga.map((path) => {
    return {
      params: {
        id: path.slug,
      },
    };
  });
  return {
    paths: allpaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const { yoga } = await import("../../pages/data/data.json");
  const eventsData = yoga.find((ev) => id === ev.slug);
  return {
    props: { data: eventsData },
  };
}

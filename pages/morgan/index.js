/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Morgan({data}) {
  const data2=data;
  const[products,setProducts]=useState(data)
  const filterProducts=(value)=>{
    setProducts(data2)
    
    const results=data2.filter((ev)=>(
      ev.cat===value
    ));
    setProducts(results)
  }
  const allProducts=()=>{
    setProducts(data2)
  }
  return (
    
    <div className="events__page wrapper mtop2 z-1 grid lg:grid-cols-4 gap-4 relative">
      <div className='flex flex-col absolute top left-50 fix'>
        <button className='my-3' onClick={()=>filterProducts("men")}>MEN</button>
        <button className='my-3' onClick={()=>filterProducts("women")}>WOMEN</button>
        <button className='my-3' onClick={()=>filterProducts("boys")}>BOYS</button>
        <button className='my-3' onClick={()=>filterProducts("girls")}>GIRLS</button>
        <button className='my-3' onClick={()=>filterProducts("unisex")}>UNISEX</button>
        <button className='my-3' onClick={()=>allProducts()}>ALL</button>
      </div>
        <div className=' grid grid-cols-1 gap-4 p-2 md:grid-cols-2 lg:grid-cols-3 col-start-2 col-end-5  global-color pt-5 mt-5'>
            
             {products.map((ev)=>(
            <Link className="events__card" key={ev.name} href={`/morgan/${ev.name}`} legacyBehavior passHref>
        <a className='ims'>
          <Image alt={ev.name} width={300} height={300} src={ev.image} className='imgim'/>
          <h2>{ev.time}</h2>
          <h2>{ev.origin}</h2>
          <h2>{ev.gender}</h2>
          <h3>{ev.color}</h3>
          <h2>${ev.price}</h2>
          </a>
        </Link>
        ))}
            </div>       
    </div>
  )
}

export default Morgan;

export async function getStaticProps(context){
  const {morgan}= await import ('../data/data.json');
  return{
    props:{
        data:morgan
    }
  }
}
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CartCount({goTocart}) {
  return (
    <div className="bg-white h-11 px-3 flex items-center justify-between sticky top-0 right-0 left-0">
    <div className="flex items-center gap-3">
      <div className="grid items-center cursor-pointer" onClick={goTocart}>
        <ChevronDoubleLeftIcon className="w-5 h-5"/>
      </div>
      <div>
        your cart <span>(items)</span>
      </div>
    </div>
    <div>
      <button type='button'>
        <XMarkIcon className="w-5 h-5"/>
      </button>
    </div>
  </div>
  )
}

export default CartCount
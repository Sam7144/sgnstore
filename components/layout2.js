import React from 'react'
import Footer from './footer'

function Layout2({children}) {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout2
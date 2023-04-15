import React from 'react'
import Header from './header'
import Footer from './footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Layout({children}) {
  return (
    <div className=' flex-col justify-between'>
      <ToastContainer position="bottom-center" limit={1}/>
        <Header/>
        {children}
    </div>
  )
}

export default Layout

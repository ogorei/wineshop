import React from 'react';
import Head from 'next/head';
// import Navbar from './Navbar';
import Footer from './Footer';
import NavbarwithHamburger from './NavbarwithHamburger';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>ソフィア°</title>
      </Head>
      <header>
        {/* <Navbar /> */}
        <NavbarwithHamburger />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;
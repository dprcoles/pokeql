import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { pages } from '@/utils/constants'

const Navbar: React.FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('')

  useEffect(() => {
    setCurrentRoute(window.location.pathname)
  }, [])

  return (
    <header role="banner" className="[ NAVBAR ] border-b-2 border-gray-100">
      <div className="flex flex-wrap self-center container mx-auto">
        <button
          className={`[ NAVBAR__Hamburger ] md:hidden self-center ml-2 px-2 ${
            menuIsActive ? 'expanded' : 'closed'
          }`}
          type="button"
          aria-label="Navbar Menu"
          title="Navbar Menu"
          onClick={() => setMenuIsActive(!menuIsActive)}
        >
          <div className="[ Hamburger__Bar1 ]"></div>
          <div className="[ Hamburger__Bar2 ]"></div>
          <div className="[ Hamburger__Bar3 ]"></div>
        </button>
        <div className="[ NAVBAR__Logo ] mx-auto md:mr-auto md:ml-0">
          <a href="/" aria-label="PokeQL Logo" title="PokeQL Logo">
            <img src="/logo_full.png" alt="PokeQL Logo" className="h-20 py-5" />
          </a>
        </div>
        <div
          className={`[ NAVBAR ] md:flex w-full md:w-auto ${
            menuIsActive ? 'block pt-8' : 'hidden'
          }`}
        >
          <nav>
            <ul className="self-center md:flex md:flex-row min-h-full h-full">
              {pages.map(page => (
                <li
                  className={`[ NAVBAR__Link ]${
                    currentRoute === page.route ? '[ NAVBAR__Active ]' : ''
                  } p-4 border-b-2 border-transparent flex justify-center items-center hover:bg-pink-100 hover:text-page-alt-color`}
                  key={page.route}
                >
                  <NextLink href={page.route}>
                    <a className="font-bold align-middle" aria-label={`Go to ${page.display}`}>
                      {page.display}
                    </a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

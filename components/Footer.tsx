import React from 'react'
import { pages } from '@/utils/constants'

const Footer: React.FC = () => {
  return (
    <div className="[ FOOTER ] bg-gray-100 px-4 py-8 border-t-2 border-page-alt-color">
      <div className="container mx-auto">
        <div className="grid grid-flow-col grid-cols-3 px-36 text-gray-500">
          <div className="[ FOOTER__Info ] px-4">
            <a href="/">
              <img src="/logo_full.png" alt="Poke QL Logo" className="[ FOOTER__Logo ] h-12" />
            </a>
            <p className="py-2">
              All Pokémon related data displayed on this site is sourced from the{' '}
              <a
                className="underline hover:text-page-alt-color"
                href="https://pokeapi.co/"
                target="_blank"
                rel="noreferrer"
              >
                <b>PokéApi</b>
              </a>{' '}
              GraphQL Api.
            </p>
            <p className="py-2">
              Created by{' '}
              <a
                className="underline hover:text-page-alt-color"
                href="https://twitter.com/_danielcoles"
                target="_blank"
                rel="noreferrer"
              >
                <b>Daniel Coles</b>
              </a>
              .
            </p>
            <p className="py-2">
              Check out the code on{' '}
              <a
                className="underline hover:text-page-alt-color"
                href="https://github.com/dcolesDEV/pokeql"
                target="_blank"
                rel="noreferrer"
              >
                <b>GitHub!</b>
              </a>
            </p>
          </div>
          <div className="[ FOOTER__SiteMap ] p-4">
            {pages.map(page => (
              <div key={page.route}>
                <a href={page.route} className="hover:text-page-alt-color hover:underline">
                  {page.display}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
